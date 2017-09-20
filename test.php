<?php
require 'vendor/autoload.php';
use GuzzleHttp\Client;

$client = new Client([
    // Base URI is used with relative requests
    'base_uri' => 'https://jsonplaceholder.typicode.com',
    'verify' => false,
]);

// Send a request to https://foo.com/api/test
$response = $client->request('GET', 'posts');

$body = $response->getBody();
// Implicitly cast the body to a string and echo it
echo $body;


?>
