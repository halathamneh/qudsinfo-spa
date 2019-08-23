<?php

/**
 * Node.php v0.4
 * (c) 2016 Jerzy Głowacki
 * MIT License
 */

error_reporting(E_ALL);

set_time_limit(120);

define("ADMIN_MODE", false); //set to true to allow unsafe operations, set back to false when finished

define("NODE_VER", "v10.16.0");

define("NODE_ARCH", "x" . substr(php_uname("m"), -2)); //x86 or x64

define("NODE_FILE", "node-" . NODE_VER . "-linux-" . NODE_ARCH . ".tar.gz");

define("NODE_URL", "http://nodejs.org/dist/" . NODE_VER . "/" . NODE_FILE);

define("NODE_DIR", "node");

define("NODE_PORT", 49999);

function node_install() {
    if(file_exists(NODE_DIR)) {
        echo "Node.js is already installed.\n";
        return;
    }
    if(!file_exists(NODE_FILE)) {
        echo "Downloading Node.js from " . NODE_URL . ":\n\n";
        $fp = fopen(NODE_FILE, "w");
        flock($fp, LOCK_EX);
        $curl = curl_init(NODE_URL);
        curl_setopt($curl, CURLOPT_HEADER, 0);
        curl_setopt($curl, CURLOPT_FILE, $fp);
        $resp = curl_exec($curl);
        curl_close($curl);
        flock($fp, LOCK_UN);
        fclose($fp);
        echo $resp === true ? "Done.\n" : "Failed. Error: curl_error($curl)\n";
    }
    echo "Installing Node.js:\n";
    passthru("tar -xzf " . NODE_FILE . " 2>&1 && mv node-" . NODE_VER . "-linux-" . NODE_ARCH . " " . NODE_DIR . " && touch nodepid && rm -f " . NODE_FILE, $ret);
    echo $ret === 0 ? "Done.\n" : "Failed. Error: $ret\nTry putting node folder via (S)FTP, so that " . __DIR__ . "/node/bin/node exists.";
}

function node_uninstall() {
    if(!file_exists(NODE_DIR)) {
        echo "Node.js is not yet installed.\n";
        return;
    }
    echo "Unnstalling Node.js:\n";
    passthru("rm -rfv " . NODE_DIR . " nodepid", $ret);
    passthru("rm -rfv node_modules", $ret);
    passthru("rm -rfv .npm", $ret);
    passthru("rm -rfv nodeout", $ret);
    echo $ret === 0 ? "Done.\n" : "Failed. Error: $ret\n";
}

function node_start($file) {
    if(!file_exists(NODE_DIR)) {
        echo "Node.js is not yet installed. <a href='?install'>Install it</a>.\n";
        return;
    }
    $node_pid = intval(file_get_contents("nodepid"));
    if($node_pid > 0) {
        echo "Node.js is already running. <a href='?stop'>Stop it</a>.\n";
        return;
    }
    $file = escapeshellarg($file);
    echo "Starting: node $file\n";
    $node_pid = exec("PORT=" . NODE_PORT . " " . NODE_DIR . "/bin/node $file >nodeout 2>&1 & echo $!");
    echo $node_pid > 0 ? "Done. PID=$node_pid\n" : "Failed.\n";
    file_put_contents("nodepid", $node_pid, LOCK_EX);
    sleep(1); //Wait for node to spin up
    echo file_get_contents("nodeout");
}

function nuxt_start() {
    if(!file_exists(NODE_DIR)) {
        echo "Node.js is not yet installed. <a href='?install'>Install it</a>.\n";
        return;
    }
    $node_pid = intval(file_get_contents("nodepid"));
    if($node_pid > 0) {
        echo "Node.js is already running. <a href='?stop'>Stop it</a>.\n";
        return;
    }
    $command = "cd app && ../node/bin/node node_modules/.bin/nuxt start --port " . NODE_PORT . " >nodeout 2>&1 & echo $!";
    echo "running: " . $command;
    $node_pid = exec($command);
    echo "\n";
    echo $node_pid > 0 ? "Done. PID=$node_pid\n" : "Failed.\n";
    file_put_contents("nodepid", $node_pid, LOCK_EX);
    sleep(1); //Wait for node to spin up
    echo file_get_contents("nodeout");


}

function node_stop() {
    if(!file_exists(NODE_DIR)) {
        echo "Node.js is not yet installed. <a href='?install'>Install it</a>.\n";
        return;
    }
    $node_pid = intval(file_get_contents("nodepid"));
    if($node_pid === 0) {
        echo "Node.js is not yet running.\n";
        return;
    }
    echo "Stopping Node.js with PID=$node_pid:\n";
    $ret = -1;
    passthru("kill $node_pid", $ret);
    echo $ret === 0 ? "Done.\n" : "Failed. Error: $ret\n";
    file_put_contents("nodepid", '', LOCK_EX);
}

function node_npm($cmd) {
    if(!file_exists(NODE_DIR)) {
        echo "Node.js is not yet installed. <a href='?install'>Install it</a>.\n";
        return;
    }
    $cmd = escapeshellcmd(NODE_DIR . "/bin/npm --cache ./.npm -- $cmd");
    echo "Running: $cmd\n";
    $ret = -1;
    passthru($cmd, $ret);
    echo $ret === 0 ? "Done.\n" : "Failed. Error: $ret. See <a href=\"npm-debug.log\">npm-debug.log</a>\n";
}

global $res;
$res = "";
function node_serve($path = "") {
    global $res;
    if(!file_exists(NODE_DIR)) {
        node_head();
        echo "Node.js is not yet installed. Switch to Admin Mode and <a href='?install'>Install it</a>.\n";
        node_foot();
        return;
    }
    $node_pid = intval(file_get_contents("nodepid"));
    if($node_pid === 0) {
        node_head();
        echo "Node.js is not yet running. Switch to Admin Mode and <a href='?start'>Start it</a>\n";
        node_foot();
        return;
    }
    $curl = curl_init("http://127.0.0.1:" . NODE_PORT . "/$path");
curl_setopt($curl, CURLOPT_BINARYTRANSFER, 1);
    curl_setopt($curl, CURLOPT_HEADER, 1);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        $headers = array();
        foreach(getallheaders() as $key => $value) {
                $headers[] = $key . ": " . $value;
        }
        curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $_SERVER["REQUEST_METHOD"]);
        if($_SERVER["REQUEST_METHOD"] === "POST") {
                curl_setopt($curl, CURLOPT_POST, 1);
                curl_setopt($curl, CURLOPT_POSTFIELDS, http_build_query($_POST));
        }
        curl_setopt($curl, CURLOPT_WRITEFUNCTION, 'curl_write_flush');
        $resp = curl_exec($curl);
        // echo $res;
    if($resp === false) {
        node_head();
        echo "Error requesting $path: " . curl_error($curl);
        node_foot();
    } else {
        list($head, $body) = explode("\r\n\r\n", $res, 2);
        $headarr = explode("\n", $head);
        foreach($headarr as $headval) {
            if($headval === "Transfer-Encoding: chunked") continue;
            header($headval);
            // echo $headval . "<br>";
        }
        echo $body;
    }
    curl_close($curl);
}

/**
 * CURLOPT_WRITEFUNCTION which flushes the output buffer and the SAPI buffer.
 *
 * @param resource $curl_handle
 * @param string   $chunk
 */
function curl_write_flush($curl_handle, $chunk)
{ 
    global $res;
    $res .= $chunk;

    // ob_flush(); // flush output buffer (Output Control configuration specific)
    flush();    // flush output body (SAPI specific)

    return strlen($chunk); // tell Curl there was output (if any).
};

function node_head() {
    echo '<!DOCTYPE html><html><head><title>Node.php</title><meta charset="utf-8"><body style="font-family:Helvetica,sans-serif;"><h1>Node.php</h1><pre>';
}

function node_foot() {
    echo '</pre><p><a href="https://github.com/niutech/node.php" target="_blank">Powered by node.php</a></p></body></html>';
}

function node_dispatch() {
    if(ADMIN_MODE) {
        node_head();
        if(isset($_GET['install'])) {
            node_install();
        } elseif(isset($_GET['uninstall'])) {
            node_uninstall();
        } elseif(isset($_GET['start'])) {
            node_start($_GET['start']);
        } elseif(isset($_GET['stop'])) {
            node_stop();
        } elseif(isset($_GET['npm_start'])) {
            nuxt_start();
        } elseif(isset($_GET['npm'])) {
            node_npm($_GET['npm']);
        } else {
            echo "You are in Admin Mode. Switch back to normal mode to serve your node app.";
        }
        node_foot();
    } else {
        if(isset($_GET['path'])) {
            node_serve($_GET['path']);
        } else {
            node_serve();
        }
    }
}

node_dispatch();
