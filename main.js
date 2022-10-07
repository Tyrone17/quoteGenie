//ToDo: create variables to store quote and name as string
var url = "https://docs.google.com/document/d/1ZYkbINPutWRcq-SwHVAXCJDklcpsPEnDi128K4Z3BSI/edit?usp=drivesdk"

function get Quote () {
 $.getJSON(url, function (resp {
   $.each(resp, function (key, value) {
      print(key + value) 
} )
}) 
}
