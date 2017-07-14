 <script src="http://www.noteflight.com/clientapi/2.0.0/nfclient.js"></script>
  // Initialize the Noteflight client API.
  NFClient.init(function(info) {
    alert("Noteflight API is ready, version " + info.version);
  });
