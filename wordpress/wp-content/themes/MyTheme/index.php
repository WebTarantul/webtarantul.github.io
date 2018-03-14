
<?php get_header(); ?>
	<section id="about" class="s-about bg__light">
		<div class="section-header">
			<h2 class="s-name"><?php
				$idObj = get_category_by_slug('s-about');
				$id = $idObj->term_id;
				echo get_cat_name($id);
				?>   </h2>
			<div class="s-descr-wraper">
				<p class="s-descr"> <?php echo category_description(2)?> </p>
			</div>
		</div>
		<div class="s-content">
			<div class="container">
				<div class="row">
					<?php if ( have_posts() ) : query_posts('p=5');
						while (have_posts()) : the_post(); ?>

					<div class="col-md-4 col-md-push-4 animation-center">
						<h3>Фото</h3>
						<div class="person">
							<?php if (has_post_thumbnail ()):?>
                                <a class="popup" href="<?php $thumb_id = get_post_thumbnail_id();
                                $thumb_url = wp_get_attachment_image_src($thumb_id,'thumbnail-size', true);
                                echo $thumb_url[0];?>
                                "title ="<?php the_title_attribute ();?>">
                                    <img src = "<?php the_post_thumbnail_url (array(400,400));?>"/>
                                </a>
								<?php endif;?>
						</div>
					</div>
					<div class="col-md-4 col-md-pull-4 animation-left">
						<h3><?php the_title(); ?></h3>

						<?php the_content(); ?>

					</div>
						<?php endwhile; endif; wp_reset_query(); ?>
					<div class="col-md-4 animation-right person-last-block">

						<?php if ( have_posts() ) : query_posts('p=10');
							while (have_posts()) : the_post(); ?>

						<h3><?php the_title(); ?></h3>
						<h2 class="person-header"><?php echo get_bloginfo('name');?></h2>
						<?php the_content(); ?>
							<?php endwhile; endif; wp_reset_query(); ?>
						<div class="social-wrap">
							<ul>
								<?php if ( have_posts() ) : query_posts('cat=3');
								while (have_posts()) : the_post(); ?>

                                <li><a href="<?php echo get_post_meta($post->ID, 'Адрес', true) ; ?>" title="<?php the_title(); ?>" target="_blank"><i class="fa <?php echo get_post_meta($post->ID, 'font_awesome', true) ; ?>" aria-hidden="true"></i></a></li>

								<?php endwhile; endif; wp_reset_query();?>
                            </ul>

						</div>

					</div>
				</div>
			</div>
		</div>
	</section>
	<section id="resume" class="s-resume">
		<div class="section-header">
			<h2 class="s-name"><?php echo get_cat_name(4) ?></h2>
			<div class="s-descr-wraper">
				<p class="s-descr"><?php echo category_description(4)?></p>
			</div>
		</div>
		<div class="s-content">
			<div class="container">
				<div class="row">
					<div class="col-md-6 left">
						<h3><?php echo get_cat_name(5) ?></h3>
						<div class="resume-icon"><i class="icon-basic-case"></i></div>
						<?php if ( have_posts() ) : query_posts('cat=5');
						while (have_posts()) : the_post(); ?>
						<div class="resume-item">
							<div class="year"><?php echo get_post_meta($post->ID, 'resume-years', true) ; ?></div>
							<div class="resume-descr"><?php echo get_post_meta($post->ID, 'resume-plase', true) ; ?> <b><?php the_title(); ?></b></div>
							<?php the_content(); ?>
						</div>
						<?php endwhile; endif; wp_reset_query(); ?>
					</div>
					<div class="col-md-6 right">
						<h3><?php echo get_cat_name(6) ?></h3>
						<div class="resume-icon"><i class="icon-basic-book-pen"></i></div>
						<?php if ( have_posts() ) : query_posts('cat=6');
						while (have_posts()) : the_post(); ?>
						<div class="resume-item">

                                    <div class="year"><?php echo get_post_meta($post->ID, 'resume-years', true) ; ?></div>
                                    <div class="resume-descr"><b><?php the_title(); ?></b><?php echo get_post_meta($post->ID, 'resume-plase', true) ; ?></div>
									<?php the_content(); ?>

						</div>
						<?php endwhile; endif; wp_reset_query(); ?>
					</div>
				</div>
			</div>
		</div >
	</section>
	<section id="portfolio" class="s-portfolio bg__dark">
		<div class="section-header">
			<h2 class="s-name"><?php echo get_cat_name(7) ?></h2>
			<div class="s-descr-wraper">
				<p class="s-descr"><?php echo category_description(7)?></p>
			</div>
		</div>
		<div class="s-content">
			<div class="container">
				<div class="row">
					<div class="filter_div controls">
						<ul class="portfolio-nav">
							<li class="filter active" data-filter="all">Все работы</li>
							<li class="filter" data-filter=".sites">Сайты</li>
							<li class="filter" data-filter=".identy">Айдентика</li>
							<li class="filter" data-filter=".logos">Логотипы</li>
						</ul>
					</div>
					<div id="portfolio_grid">

						<?php if ( have_posts() ) : query_posts('cat=7');
							while (have_posts()) : the_post(); ?>

					<div class="mix col-md-3 col-sm-6 col-xs-12 portfolio-item <?php
					$tags = wp_get_post_tags($post->ID);
					if ($tags) {
						foreach($tags as $tag) {
							echo  ' '. $tag->name;
						}
					} ?>">
						<img src="<?php the_post_thumbnail_url (array(400,400));?>" alt="<?php the_title(); ?>" title="<?php the_title(); ?>">
						<div class="portfolio-item__modal">
							<h1><?php the_title(); ?></h1>
							<p><?php the_excerpt(); ?></p>
							<a class="porfolio-item__descr-open" type="inline">Посмортеть</a>
						</div>
						<div class="hidden">
							<div class="porfolio-item__descr">
							<h3><?php the_title(); ?></h3>
							<p><?php the_content(); ?></p>
							<img src="<?php the_post_thumbnail_url (array(400,auto));?>" alt="<?php the_title(); ?>" title="<?php the_title(); ?>">
						</div>
						</div>
					</div>

							<?php endwhile; endif; wp_reset_query(); ?>

				</div>
				</div>
			</div>
		</div >
	</section>
	<section id="contacts" class="s-contacts bg__light">
		<div class="section-header">
			<h2 class="s-name"><?php echo get_cat_name(12) ?></h2>
			<div class="s-descr-wraper">
				<p class="s-descr"><?php echo category_description(12)?></p>
			</div>
		</div>
		<div class="s-content">
			<div class="container">
				<div class="row">
					<div class="col-md-6 col-sm-6">
						<div class="contact-box">
							<div class="icon-basic-geolocalize-05"></div>
							<h3>Адрес:</h3>
							<p><?php $options = get_option('sample_theme_options');
								echo $options['adress'];?></p>
						</div>
						<div class="contact-box">
							<div class="icon-basic-smartphone"></div>
							<h3>Телефон:</h3>
							<p><?php $options = get_option('sample_theme_options');
								echo $options['phonenumber'];?></p>
						</div>
						<div class="contact-box">
							<div class="icon-basic-webpage-img-txt"></div>
							<h3>Веб-сайт:</h3>
							<p><a href="//<?php $options = get_option('sample_theme_options');
								echo $options['website'];?>"><?php $options = get_option('sample_theme_options');
									echo $options['website'];?></a></p>
						</div>
					</div>
					<div class="col-md-6 col-sm-6">
						<form action="https://formspree.io/tarstar1990@gmail.com"
      method="POST" class="main_form" novalidate target="_blank" method="post">
							<label class="form-group">
							<span class="color_element">*</span> Ваше имя:
							<input type="text" name="name" placeholder="Ваше имя" data-validation-required-message="Вы не ввели имя" required />
							<span class="help-block text-danger"></span>
						</label>
						<label class="form-group">
							<span class="color_element">*</span> Ваш E-mail:
							<input type="email" name="email" placeholder="Ваш E-mail" data-validation-required-message="Не корректно введен E-mail" required />
							<span class="help-block text-danger"></span>
						</label>
						<label class="form-group">
							<span class="color_element">*</span> Ваше сообщение:
							<textarea name="message" placeholder="Ваше сообщение" data-validation-required-message="Вы не ввели сообщение" required></textarea>
							<span class="help-block text-danger"></span>
						</label>
							<button type="submit">Отправить</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>
	<?php get_footer(); ?>