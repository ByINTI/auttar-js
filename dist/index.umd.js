/*!
 * auttarjs v0.3.0
 * (c) Heitor Ramon Ribeiro <heitor.ramon@gmail.com>
 * Released under the MIT License.
 */
!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?module.exports=o():"function"==typeof define&&define.amd?define(o):(e=e||self).Auttar=o()}(this,function(){"use strict";function e(e,o){for(var n=0;n<o.length;n++){var a=o[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var o={Info:"info",Warn:"warn",Error:"error",Method:"method",All:"all",None:"none"},n={Info:"background:#215ace ; padding: 2px; border-radius: 2px 0 0 2px;  color: #fff;",Warn:"background:#e8c82c ; padding: 2px; border-radius: 2px 0 0 2px;  color: #000;",Error:"background:#c92112 ; padding: 2px; border-radius: 2px 0 0 2px;  color: #fff;",Method:"background:#6d0cb2 ; padding: 2px; border-radius: 2px 0 0 2px;  color: #fff;"},a="Auttar ",t="background:#bc0909 ; padding: 2px; border-radius: 0 2px 2px 0;  color: #fff ",r=function(e,o,n,a,t){console.log("%c ".concat(e," %c ").concat(n," %c ").concat(t),o,a,"background: transparent;")},c=function(e,o,n,a,t){console.error("%c ".concat(e," %c ").concat(n," %c ").concat(t),o,a,"background: transparent;")};function i(e){r(o.Info,n.Info,a,t,e)}function s(e){r(o.Warn,n.Warn,a,t,e)}function u(e,c,i){r(o.Method,n.Method,a,t,"Call Method: ".concat(e,"(").concat(c||"",") ").concat(i?"=> ".concat(JSON.stringify(i)):""))}function d(e){c(o.Warn,n.Warn,a,t,e)}function l(e){return function(){for(var o=[],n=0;n<arguments.length;n++)o[n]=arguments[n];try{return Promise.resolve(e.apply(this,o))}catch(e){return Promise.reject(e)}}}function g(e,o){try{var n=e()}catch(e){return o(e)}return n&&n.then?n.then(void 0,o):n}function f(e,o,n){return n?o?o(e):e:(e&&e.then||(e=Promise.resolve(e)),o?e.then(o):e)}var m={transactions:{credit:{base:112,installment:113,installmentWithInterest:114},debit:{base:101,voucher:106},cancel:128,confirm:6,requestCancel:191},return:{success:0,timeOut:1,notAuthorizes:5,internetError:10,intertefError:12,error:20,ecommerceError:30},errorCodes:{5300:"Valor não informado",5301:"Cartão inválido",5302:"Cartão vencido",5303:"Data de vencimento inválido",5304:"Código de segurança inválido",5305:"Taxa de serviço excede limite",5306:"Operação não permitida",5307:"Dados inválidos",5308:"Valor mínimo da parcela inválido",5309:"Número de parcelas inválido",5310:"Número de parcelas excede limite",5311:"Valor da entrada maior ou igual ao valor da transação",5312:"Valor da parcela inválido",5313:"Data inválida",5314:"Prazo excede limite",5316:"NSU inválido",5317:"Operação cancelada pelo usuário",5318:"Documento inválido (CPF ou CNPJ)",5319:"Valor do documento inválido",5328:"Erro na captura de dados do Pin-Pad",5329:"Erro na captura do chip ou cartão removido antes da hora.",5364:"Data de emissão do cartão inválida",5355:"O tipo de financiamento informado não é coerente com o número de parcelas"},ws:null,timeout:null,close:!0,timeoutConn:null,host:"",debug:!1};function p(){m.debug&&u("_disconnect"),m.ws.close(),m.debug&&i("WebSocket Disconnected")}function b(e){return m.debug&&u("_webSocket","host",e),new Promise(function(o,n){try{m.debug&&i("Starting WebSocket Connection."),null===m.ws?(m.debug&&i("WebSocket not active, creating a new connection."),m.host=e,m.ws=new WebSocket(e)):2!==m.ws.readyState&&3!==m.ws.readyState||(m.debug&&s("WebSocket is connected but not available. Closing connection to start a new one."),p(),m.ws=new WebSocket(e))}catch(e){n(e)}m.ws&&(m.ws.onopen=function(){i("WebSocket Connected."),o()},m.ws.onerror=function(e){m.debug&&(s("WebSocket has returned an error."),d(e)),n(e)})})}function h(e){return m.debug&&u("_send","payload",e),new Promise(function(o,n){try{m.ws&&1===m.ws.readyState?(m.debug&&(i("Sending a message to the WebSocket."),i(JSON.stringify(e))),m.ws.send(JSON.stringify(e)),m.ws.onmessage=function(e){m.debug&&(i("Receiving a message from the WebSocket."),i(JSON.stringify(e.data))),o(JSON.parse(e.data))}):setTimeout(function(){p(),b(m.host)},5e3)}catch(e){n(e)}})}return function(){function o(e){!function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,o),this.__host=e.host||"ws://localhost:2500",this.debug=e.debug||!1,m.debug=e.debug||!1,this.orderId=e.orderId||"",this.__amount=0,e.amount&&(this.amount=e.amount),this.__transactionDate=(new Date).toLocaleDateString("pt-BR",{year:"2-digit",month:"2-digit",day:"2-digit",timeZone:"America/Sao_Paulo"}).replace(/\//g,""),this.ctfTransaction={},this.__debugMessage=[],b(this.__host)}var n,a,t;return n=o,(a=[{key:"debugLog",value:function(e){this.debug&&i(e)}},{key:"debugWarning",value:function(e){this.debug&&s(e)}},{key:"debugLogMethod",value:function(e,o){if(this.debug){for(var n=arguments.length,a=new Array(n>2?n-2:0),t=2;t<n;t++)a[t-2]=arguments[t];u(e,o,a)}}},{key:"classError",value:function(e){return this.debugMessage={message:e,logLevel:"error"},this.debug&&d(e),new Error(e)}},{key:"credit",value:l(function(){var e=this,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e.debugLogMethod("credi","installments, withInterest",o,n),g(function(){var a={valorTransacao:e.amount,documento:e.orderId,operacao:m.transactions.credit.base,dataTransacao:e.__transactionDate};return o>1&&(a.operacao=m.transactions.credit.installment,a.numeroParcelas=o),o>1&&n&&(a.operacao=m.transactions.credit.installmentWithInterest,a.numeroParcelas=o),e.debugMessage={message:"Pagamento com cartão de crédito. Operação: ".concat(a.operacao,". Valor ").concat(e.amount," centavos")},f(h(a),function(o){if(o.retorno>0){var n=m.errorCodes[o.codigoErro]||o.display.length?o.display.map(function(e){return e.mensagem}).join(" "):" ";return Promise.reject(e.classError("Transação não concluída ".concat(o.codigoErro,": ").concat(n)))}return e.ctfTransaction=Object.assign({},o,{dataTransacao:e.__transactionDate}),Promise.resolve(o)})},function(e){return Promise.reject(e)})})},{key:"debit",value:l(function(){var e=this,o=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return g(function(){return e.debugLogMethod("debit","isVoucher",o),e.debugMessage={message:"Pagamento com cartão de débito. Operação: ".concat(operacao,". Valor ").concat(e.amount," centavos")},f(h({valorTransacao:e.amount,documento:e.orderId,dataTransacao:e.__transactionDate,operacao:o?m.transactions.debit.voucher:m.transactions.debit.base}),function(o){if(o.retorno>0){var n=m.errorCodes[o.codigoErro]||o.display.length?o.display.map(function(e){return e.mensagem}).join(" "):" ";return Promise.reject(e.classError("Transação não concluída ".concat(o.codigoErro,": ").concat(n)))}return e.ctfTransaction=Object.assign({},o,{dataTransacao:e.__transactionDate}),Promise.resolve(o)})},function(e){return Promise.reject(e)})})},{key:"confirm",value:l(function(){var e=this;return g(function(){return e.debugLogMethod("confirm"),f(h({operacao:m.transactions.confirm}),function(o){if(e.debugMessage={message:"Confirmação de pagamento da operação realizada.\n      Operação: ".concat(e.ctfTransaction.operacao,"\n      Data: ").concat(e.ctfTransaction.dataTransacao,"\n      Valor: ").concat(e.amount,"\n      Bandeira: ").concat(e.ctfTransaction.bandeira,"\n      Cartão: ").concat(e.ctfTransaction.cartao)},o.retorno>0){var n=m.errorCodes[o.codigoErro]||o.display.length?o.display.map(function(e){return e.mensagem}).join(" "):" ";return Promise.reject(e.classError("Transação não concluída ".concat(o.codigoErro,": ").concat(n)))}return e.ctfTransaction=Object.assign(e.ctfTransaction,o),Promise.resolve(o)})},function(e){return Promise.reject(e)})})},{key:"requestCancellation",value:l(function(){var e=this;return g(function(){return e.debugLogMethod("requestCancellation"),e.debugMessage={message:"Requisição de cancelamento de compra.\n      Operação: ".concat(e.ctfTransaction.operacao,"\n      Data: ").concat(e.ctfTransaction.dataTransacao,"\n      Valor: ").concat(e.amount,"\n      NSU: ").concat(e.ctfTransaction.nsuCTF)},f(h({operacao:m.transactions.requestCancel}),function(o){if(o.retorno>0){var n=m.errorCodes[o.codigoErro]||o.display.length?o.display.map(function(e){return e.mensagem}).join(" "):" ";return Promise.reject(e.classError("Transação não concluída ".concat(o.codigoErro,": ").concat(n)))}return Promise.resolve(o)})},function(e){return Promise.reject(e)})})},{key:"cancel",value:l(function(){var e=this,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return g(function(){e.debugLogMethod("cancel","prop",o);var n=m.transactions.cancel,a=o.operacao||e.ctfTransaction.operacao,t=o.dataTransacao||e.ctfTransaction.dataTransacao,r=o.amount?100*parseFloat(o.amount):e.ctfTransaction.valorTransacao,c=o.nsuCTF||e.ctfTransaction.nsuCTF;return e.debugMessage={message:"Cancelamento de compra.\n        Operação: ".concat(a,"\n        Data: ").concat(t,"\n        Valor: ").concat(r,"\n        NSU: ").concat(c)},f(h({operacao:n,valorTransacao:r,dataTransacao:t,nsuCTF:c}),function(o){if(o.retorno>0){var n=m.errorCodes[o.codigoErro]||o.display[0].mensagem;return Promise.reject(e.classError("Transação não concluída ".concat(o.codigoErro,": ").concat(n)))}})},function(e){return Promise.reject(e)})})},{key:"debugMessage",get:function(){return this.__debugMessage},set:function(e){if(this.debug){var o=Object.assign({logLevel:"info",message:""},e,{date:(new Date).toISOString()});if("log"===o.logLevel&&o.message)return this.debugLog(o.message);this.__debugMessage.push(Object.assign({},o,{date:(new Date).toISOString()})),"info"===o.logLevel&&o.message&&this.debugLog(o.message)}}},{key:"amount",get:function(){return this.__amount},set:function(e){if("number"==typeof e&&e<=0)throw new Error("Não é possível definir um valor menor ou igual a zero.");this.__amount=100*parseFloat(e)}}])&&e(n.prototype,a),t&&e(n,t),o}()});
//# sourceMappingURL=index.umd.js.map
