(function ( $ ) {
  $.fn.detectCloser = function ( ){
      var visibleItens =  $(this);
      var posicoes = [];
      var posWindow = $(window).scrollTop() + $(window).height()/2;

      $.each(visibleItens , function(){
        var posT = parseInt($(this).offset().top);
        var posB = parseInt($(this).offset().top + $(this).height() -1 );

        posicoes.push({top:posT,bottom:posB});
      })

      var item = checkPositions(posWindow,posicoes);
      function checkPositions(posicaoTela, itens){
        var index = 0;
        var pos = itens[0].top;
        var diff = Math.abs (posicaoTela - pos);
        var actual = visibleItens[index];

        $.each(itens , function(i){
          var diffTop = Math.abs (posWindow - this.top)
          var diffBottom = Math.abs (posWindow - this.bottom)
          var newdiff = diffTop>diffBottom?diffBottom:diffTop;

          if (newdiff < diff) {
            diff = newdiff;
            index = i;
            actual = visibleItens[index];
          }
        });
        return actual;
      }

      return $(item);
  }
}( jQuery ));
