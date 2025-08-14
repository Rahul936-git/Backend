Code    Meaning                            When to Use

200     OK                                 Successful GET/PUT/PATCH
201     Created                            Resource created (POST)
400     Bad Request                        Invalid client input
401     Unauthorized                       Authentication needed
403     Forbidden                          No permission
404     Not Found                          Resource doesn’t exist
500     Internal Server Error              Server-side failure



<!-- other -->

Code    Meaning                            When to Use

200     OK                                 Successful GET/PUT/PATCH
201     Created                            Resource created (POST)
202     Accepted                           Request accepted but not completed yet
203     Non-Authoritative Information      Returned meta-information is not from the origin server
204     No Content                         Request succeeded but no content returned
205     Reset Content                      Tell client to reset the document view
206     Partial Content                    Partial GET request successful

300     Multiple Choices                   Multiple options for the resource
301     Moved Permanently                  Resource moved permanently to a new URL
302     Found                              Temporarily redirected to another URL
303     See Other                          See another URL using GET
304     Not Modified                       Resource has not changed since last request
307     Temporary Redirect                 Temporary redirection, use same method
308     Permanent Redirect                 Permanent redirection, use same method

400     Bad Request                        Invalid client input
401     Unauthorized                       Authentication needed
402     Payment Required                   Reserved for future use (payments)
403     Forbidden                          No permission
404     Not Found                          Resource doesn’t exist
405     Method Not Allowed                 HTTP method not allowed on this resource
406     Not Acceptable                     Requested resource not acceptable
408     Request Timeout                    Server timed out waiting for request
409     Conflict                           Request conflict with current server state
410     Gone                               Resource no longer available and removed permanently
413     Payload Too Large                  Request entity too large
429     Too Many Requests                  Client sent too many requests in a short time

500     Internal Server Error              Server-side failure