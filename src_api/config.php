<?php

$testnet = false;
$cacheLocation = __DIR__.'/'.($testnet ? 'cache-testnet' : 'cache');
$daemonAddress = '127.0.0.1';
$rpcPort = $testnet ? 2046 : 2046;
$coinSymbol = 'geem';
