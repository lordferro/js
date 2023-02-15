window.onscroll = function (ev) {
            if (
              window.innerHeight + window.scrollY >=
              document.body.offsetHeight
            ) {
              return Notify.warning(
                "We're sorry, but you've reached the end of search results.")
              
            }
        };
        