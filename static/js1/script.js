$(document).ready(function(){

	// AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
	$('.lista_categorias1 .category_item1[category="all"]').addClass('ct_item-active1');

	// FILTRANDO PRODUCTOS  ============================================

	$('.category_item1').click(function(){
		var catProduct = $(this).attr('category');
		console.log(catProduct);

		// AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
		$('.category_item1').removeClass('ct_item-active1');
		$(this).addClass('ct_item-active1');

		// OCULTANDO PRODUCTOS =========================
		$('.product-item1').css('transform', 'scale(0)');
		function hideProduct(){
			$('.product-item1').hide();
		} setTimeout(hideProduct,400);

		// MOSTRANDO PRODUCTOS =========================
		function showProduct(){
			$('.product-item1[category="'+catProduct+'"]').show();
			$('.product-item1[category="'+catProduct+'"]').css('transform', 'scale(1)');
		} setTimeout(showProduct,400);
	});

	// MOSTRANDO TODOS LOS PRODUCTOS =======================

	$('.category_item1[category="all"]').click(function(){
		function showAll(){
			$('.product-item1').show();
			$('.product-item1').css('transform', 'scale(1)');
		} setTimeout(showAll,400);
	});
});