$(document).ready(function(){window.leadCtrl={$leadForm:$("#leadForm"),init:function(){1===this.$leadForm.length&&this.initLeadForm(this.$leadForm)},initLeadForm:function(a){var b=a,c=b.find("#referralFormMessage"),d=b.find("#dwfrm_leadgeneration_message");c.on("change",function(){var a=$(this).val();d.val(a)})}},leadCtrl.init()});