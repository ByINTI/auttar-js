/*!
 * auttarjs v0.3.7
 * (c) INTI <ti@byinti.com>
 * Released under the MIT License.
 */
!function(o,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(o=o||self).Auttar=e()}(this,function(){"use strict";function o(o,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(o,n.key,n)}}var e={Info:"info",Warn:"warn",Error:"error",Method:"method",All:"all",None:"none"},a={Info:"background:#215ace ; padding: 2px; border-radius: 2px 0 0 2px;  color: #fff;",Warn:"background:#e8c82c ; padding: 2px; border-radius: 2px 0 0 2px;  color: #000;",Error:"background:#c92112 ; padding: 2px; border-radius: 2px 0 0 2px;  color: #fff;",Method:"background:#6d0cb2 ; padding: 2px; border-radius: 2px 0 0 2px;  color: #fff;"},n="Auttar ",t="background:#bc0909 ; padding: 2px; border-radius: 0 2px 2px 0;  color: #fff ",r=function(o,e,a,n,t){console.log("%c ".concat(o," %c ").concat(a," %c ").concat(t),e,n,"background: transparent;")},c=function(o,e,a,n,t){console.error("%c ".concat(o," %c ").concat(a," %c ").concat(t),e,n,"background: transparent;")};function i(o){r(e.Info,a.Info,n,t,o)}function s(o){r(e.Warn,a.Warn,n,t,o)}function u(o,c,i){r(e.Method,a.Method,n,t,"Call Method: ".concat(o,"(").concat(c||"",") ").concat(i?"=> ".concat(JSON.stringify(i)):""))}function d(o){c(e.Warn,a.Warn,n,t,o)}function l(o){return new Promise(function(e){return setTimeout(e,o)})}var g={transactions:{credit:{base:112,installment:113,installmentWithInterest:114},debit:{base:101,voucher:106},cancel:128,confirm:6,requestCancel:191},return:{success:0,timeOut:1,notAuthorizes:5,internetError:10,intertefError:12,error:20,ecommerceError:30},errorCodes:{5300:"Valor não informado",5301:"Cartão inválido",5302:"Cartão vencido",5303:"Data de vencimento inválido",5304:"Código de segurança inválido",5305:"Taxa de serviço excede limite",5306:"Operação não permitida",5307:"Dados inválidos",5308:"Valor mínimo da parcela inválido",5309:"Número de parcelas inválido",5310:"Número de parcelas excede limite",5311:"Valor da entrada maior ou igual ao valor da transação",5312:"Valor da parcela inválido",5313:"Data inválida",5314:"Prazo excede limite",5316:"NSU inválido",5317:"Operação cancelada pelo usuário",5318:"Documento inválido (CPF ou CNPJ)",5319:"Valor do documento inválido",5328:"Erro na captura de dados do Pin-Pad",5329:"Erro na captura do chip ou cartão removido antes da hora.",5364:"Data de emissão do cartão inválida",5355:"O tipo de financiamento informado não é coerente com o número de parcelas"},ws:null,timeout:null,close:!0,timeoutConn:null,timeoutMs:6e4,debug:!1};function f(){g.debug&&(u("_clearTimeout"),i("Clearing WebSocket timeout.")),g.close=!1,clearTimeout(g.timeoutConn),g.close=!0}function m(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e4;return new Promise(function(e,a){g.debug&&(u("_timeout","time",o),i("Starting WebSocket timeout.")),g.timeoutConn=setTimeout(function(){g.close?(g.ws.close(),a(new Error("Connection Timeout."))):(f(),e(!0))},o)})}function b(o,e){return g.debug&&u("_connect","host",o),new Promise(function(a,n){try{null===g.ws?(g.debug&&i("Starting WebSocket Connection."),g.ws=new WebSocket(o)):2!==g.ws.readyState&&3!==g.ws.readyState||(g.debug&&s("WebSocket is connected but not available. Closing connection to start a new one."),g.debug&&u("_disconnect"),g.ws.close(),g.ws=new WebSocket(o))}catch(o){n(o)}if(g.ws){m();var t=function(){g.debug&&(i("Sending a message to the WebSocket."),i(JSON.stringify(e))),f(),g.ws.send(JSON.stringify(e)),m(g.timeoutMs).catch(function(o){return n(o)})};1===g.ws.readyState?t():g.ws.onopen=function(){g.debug&&i("WebSocket Connected."),t()},g.ws.onmessage=function(o){g.debug&&(i("Received a message from the WebSocket."),i(JSON.stringify(o.data))),f(),a(JSON.parse(o.data))},g.ws.onerror=function(o){g.debug&&(s("WebSocket has returned an error."),d(JSON.stringify(o))),f(),n(o)}}})}return function(){function e(o){!function(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.__host=o.host||"ws://localhost:2500",this.debug=o.debug||!1,g.debug=o.debug||!1,g.timeoutMs=o.webSocketTimeout||6e4,this.orderId=o.orderId||"",this.__amount=0,this.__sleepTimeout=o.sleepTimeout||1e3,o.amount&&(this.amount=o.amount),this.__transactionDate=(new Date).toLocaleDateString("pt-BR",{year:"2-digit",month:"2-digit",day:"2-digit",timeZone:"America/Sao_Paulo"}).replace(/\//g,""),this.ctfTransaction={},this.__debugMessage=[]}var a,n,t;return a=e,(n=[{key:"debugLog",value:function(o){this.debug&&i(JSON.stringify(o))}},{key:"debugWarning",value:function(o){this.debug&&s(o)}},{key:"debugLogMethod",value:function(o,e){if(this.debug){for(var a=arguments.length,n=new Array(a>2?a-2:0),t=2;t<a;t++)n[t-2]=arguments[t];u(o,e,n)}}},{key:"classError",value:function(o){return this.debugMessage={message:o,logLevel:"error"},this.debug&&d(o),new Error(o)}},{key:"credit",value:function(){var o=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return new Promise(function(n,t){o.debugLogMethod("credi","installments, withInterest",e,a);var r={valorTransacao:o.amount,documento:o.orderId,operacao:g.transactions.credit.base,dataTransacao:o.__transactionDate};e>1&&(r.operacao=g.transactions.credit.installment,r.numeroParcelas=e),e>1&&a&&(r.operacao=g.transactions.credit.installmentWithInterest,r.numeroParcelas=e),o.debugMessage={message:"Pagamento com cartão de crédito. Operação: ".concat(r.operacao,". Valor ").concat(o.amount," centavos")},l(o.__sleepTimeout).then(function(){b(o.__host,r).then(function(e){if(e.retorno>0){var a=g.errorCodes[e.codigoErro]||e.display.length?e.display.map(function(o){return o.mensagem}).join(" "):" ";t(o.classError("Transação não concluída ".concat(e.codigoErro,": ").concat(a)))}o.ctfTransaction=Object.assign({},e,{dataTransacao:o.__transactionDate}),o.debugMessage={message:o.ctfTransaction},n(Object.assign({documento:o.orderId,dataTransacao:o.__transactionDate},e))}).catch(function(e){return o.classError(e)})})})}},{key:"debit",value:function(){var o=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return new Promise(function(a,n){o.debugLogMethod("debit","isVoucher",e);var t=e?g.transactions.debit.voucher:g.transactions.debit.base;o.debugMessage={message:"Pagamento com cartão de débito. Operação: ".concat(t,". Valor ").concat(o.amount," centavos")},l(o.__sleepTimeout).then(function(){b(o.__host,{valorTransacao:o.amount,documento:o.orderId,dataTransacao:o.__transactionDate,operacao:t}).then(function(e){if(e.retorno>0){var t=g.errorCodes[e.codigoErro]||e.display.length?e.display.map(function(o){return o.mensagem}).join(" "):" ";n(o.classError("Transação não concluída ".concat(e.codigoErro,": ").concat(t)))}o.ctfTransaction=Object.assign({},e,{dataTransacao:o.__transactionDate}),o.debugMessage={message:o.ctfTransaction},a(Object.assign({documento:o.orderId,dataTransacao:o.__transactionDate},e))}).catch(function(e){return o.classError(e)})})})}},{key:"confirm",value:function(){var o=this;return new Promise(function(e,a){o.debugLogMethod("confirm");var n=g.transactions.confirm;l(o.__sleepTimeout).then(function(){b(o.__host,{operacao:n}).then(function(n){if(o.debugMessage={message:"Confirmação de pagamento da operação realizada.\n      Operação: ".concat(o.ctfTransaction.operacao,"\n      Data: ").concat(o.ctfTransaction.dataTransacao,"\n      Valor: ").concat(o.amount,"\n      Bandeira: ").concat(o.ctfTransaction.bandeira,"\n      Cartão: ").concat(o.ctfTransaction.cartao)},n.retorno>0){var t=g.errorCodes[n.codigoErro]||n.display.length?n.display.map(function(o){return o.mensagem}).join(" "):" ";a(o.classError("Transação não concluída ".concat(n.codigoErro,": ").concat(t)))}o.ctfTransaction=Object.assign(o.ctfTransaction,n),o.debugMessage={message:o.ctfTransaction},e(Object.assign({},o.ctfTransaction,n))}).catch(function(e){return o.classError(e)})})})}},{key:"requestCancellation",value:function(){var o=this;return new Promise(function(e,a){o.debugLogMethod("requestCancellation");var n=g.transactions.requestCancel;l(o.__sleepTimeout).then(function(){b(o.__host,{operacao:n}).then(function(n){if(o.debugMessage={message:"Requisição de cancelamento de compra.\n      Operação: ".concat(o.ctfTransaction.operacao,"\n      Data: ").concat(o.ctfTransaction.dataTransacao,"\n      Valor: ").concat(o.amount,"\n      NSU: ").concat(o.ctfTransaction.nsuCTF)},n.retorno>0){var t=g.errorCodes[n.codigoErro]||n.display.length?n.display.map(function(o){return o.mensagem}).join(" "):" ";a(o.classError("Transação não concluída ".concat(n.codigoErro,": ").concat(t)))}o.debugMessage={message:n},e(Object.assign({},o.ctfTransaction,n))}).catch(function(e){return o.classError(e)})})})}},{key:"cancel",value:function(){var o=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise(function(a,n){o.debugLogMethod("cancel","prop",e);var t=g.transactions.cancel,r=e.operacao||o.ctfTransaction.operacao,c=e.dataTransacao||o.ctfTransaction.dataTransacao,i=e.amount?100*parseFloat(e.amount):o.ctfTransaction.valorTransacao,s=e.nsuCTF||o.ctfTransaction.nsuCTF;l(o.__sleepTimeout).then(function(){b(o.__host,{operacao:t,valorTransacao:i,dataTransacao:c,nsuCTF:s}).then(function(e){if(o.debugMessage={message:"Cancelamento de compra.\n        Operação: ".concat(r,"\n        Data: ").concat(c,"\n        Valor: ").concat(i,"\n        NSU: ").concat(s)},e.retorno>0){var t=g.errorCodes[e.codigoErro]||e.display[0].mensagem;n(o.classError("Transação não concluída ".concat(e.codigoErro,": ").concat(t)))}o.debugMessage={message:e},a(Object.assign({},o.ctfTransaction,e))}).catch(function(e){return o.classError(e)})})})}},{key:"debugMessage",get:function(){return this.__debugMessage},set:function(o){if(this.debug){var e=Object.assign({logLevel:"info",message:""},o);return"log"===e.logLevel&&e.message?this.debugLog(e.message):(this.__debugMessage.push(Object.assign({},e,{date:(new Date).toISOString()})),this.debugLog(e.message))}}},{key:"amount",get:function(){return this.__amount},set:function(o){if("number"==typeof o&&o<=0)throw new Error("Não é possível definir um valor menor ou igual a zero.");this.__amount=100*parseFloat(o)}}])&&o(a.prototype,n),t&&o(a,t),e}()});
//# sourceMappingURL=index.umd.js.map
