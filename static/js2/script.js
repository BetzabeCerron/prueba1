$(document).ready(function(){

	// AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
	$('.lista_categorias2 .category_item2[category="all"]').addClass('ct_item-active1');

	// FILTRANDO PRODUCTOS  ============================================

	$('.category_item2').click(function(){
		var catProduct = $(this).attr('category');
		console.log(catProduct);

		// AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
		$('.category_item2').removeClass('ct_item-active1');
		$(this).addClass('ct_item-active1');

		// OCULTANDO PRODUCTOS =========================
		$('.product-item2').css('transform', 'scale(0)');
		function hideProduct(){
			$('.product-item2').hide();
		} setTimeout(hideProduct,400);

		// MOSTRANDO PRODUCTOS =========================
		function showProduct(){
			$('.product-item2[category="'+catProduct+'"]').show();
			$('.product-item2[category="'+catProduct+'"]').css('transform', 'scale(1)');
		} setTimeout(showProduct,400);
	});

	// MOSTRANDO TODOS LOS PRODUCTOS =======================

	$('.category_item2[category="all"]').click(function(){
		function showAll(){
			$('.product-item2').show();
			$('.product-item2').css('transform', 'scale(1)');
		} setTimeout(showAll,400);
	});
});