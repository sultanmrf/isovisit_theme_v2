$(document).ready(function (){
   initCommentsUsersSwiper();
   /* function show filters select start */
   function show_filters_select(target){
      let count_filter_selected = 0 ;
      $(target).find(".card-body").text('');
      $("input[type='checkbox']").each(function (){
         if($(this).is(':checked')){
            let val_checkbox_current = $(this).val();
            $(target).removeClass('d-none');
            $(target).find(".card-body").append("" +
                "    <div class=\"card-text d-flex border border-radius  p-1 mt-2 mx-2\">\n" +
                "         <span class=\"align-self-center\"> " + val_checkbox_current + "</span>\n" +
                "         <i class=\"fa-solid fa-2x fa-xmark text-danger ms-2 pointer-event remove-filter-card\" role='button' data-title_filter='" + val_checkbox_current + "'></i>\n" +
                "    </div>")

            ++count_filter_selected;
            if(target === '.card-details-filter-mobile'){
               $(target).removeClass('box-shadow-lg').addClass('bg-transparent');
               $(target).find(".card-body .card-text").addClass('bg-white');
            }
         }
         /*اگر تعداد فیلتر های ثبت شده بیشتر از 0 باشد عددش رو بنداز و گرنه باید خالی چاپ شود */
         show_counter_filter(count_filter_selected);

      })

      let count_filters_done = $(target).find(".card-body .card-text").length;
      if(count_filters_done === 0){
         $(target).addClass('d-none');
      }
   }
   /* function show filters select end */

   function show_counter_filter(count_filter_selected){
      count_filter_selected > 0
          ? $(".count_filter_selected").text(count_filter_selected)
          : $(".count_filter_selected").text("");
   }

   function remove_filters(target){
      $(target).find(".card-body").text('');
      $(target).addClass('d-none');
      $("[type='checkbox']").prop('checked',false);
      show_counter_filter(0);
   }

   /* remove filters in size < 992 start */
   $(document).off('click','.remove-filters-mobile');
   $(document).on('click','.remove-filters-mobile',function (){
      remove_filters(".card-details-filter-mobile")
   });
   /* remove filters in size < 992 end */

   /* remove filters in size > 992 start */
   $(document).off('click','.remove-filters');
   $(document).on('click','.remove-filters',function (){
      remove_filters(".card-details-filter")
   });
   /* remove filters in size > 992 end */

   /* remove single filters start */
   $(document).on('click','.remove-filter-card',function (){
      $(this).parent().remove();
      let count_filters_done = $(".card-details-filter,.card-details-filter-mobile").find(".card-body .card-text").length;
      if(count_filters_done < 1)
         $(".card-details-filter,.card-details-filter-mobile").addClass('d-none');
      show_counter_filter(count_filters_done);
      let fef= $(this).data('title_filter');
      $("input[value='" + fef + "']").prop('checked',false);
   });
   /* remove single filters end */

   $(".filter [type='checkbox']").click(function (){
      show_filters_select(".card-details-filter");
   })

   $(".apply-filter").click(function (){
      show_filters_select('.card-details-filter-mobile');
   })


   $(document).off('click','.offcanvas-sorting .btn');
   $(document).on('click','.offcanvas-sorting .btn',function (){
      let title_btn = $(this).find("span").text();
      $(".btn-sorting").find('span').html(' ');
      $(".btn-sorting").find('span').text(title_btn);
      $(".offcanvas-sorting .btn i").removeClass('fa-check');
      $(this).find('i').addClass('fa-check');
   });
});

