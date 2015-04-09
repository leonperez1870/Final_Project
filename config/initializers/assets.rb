# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'
Rails.application.config.assets.precompile += %w( header_styles.css )
Rails.application.config.assets.precompile += %w( content_styles.css )
Rails.application.config.assets.precompile += %w( bootstrap.css )
Rails.application.config.assets.precompile += %w( bootstrap-docs.css )
Rails.application.config.assets.precompile += %w( prettify.css )

Rails.application.config.assets.precompile += %w( application.js )
Rails.application.config.assets.precompile += %w( jquery-1.10.2.min.js )
Rails.application.config.assets.precompile += %w( bootstrap.min.js )
Rails.application.config.assets.precompile += %w( modernizr.custom.js )
Rails.application.config.assets.precompile += %w( page-transitions.js )
Rails.application.config.assets.precompile += %w( jquery.scrollTo-1.4.3.1-min.js )
Rails.application.config.assets.precompile += %w( jquery.parallax.min.js )
Rails.application.config.assets.precompile += %w( easing.min.js )
Rails.application.config.assets.precompile += %w( jquery.svg.js )
Rails.application.config.assets.precompile += %w( jquery.svganim.js )
Rails.application.config.assets.precompile += %w( jquery.bxslider.min.js )
Rails.application.config.assets.precompile += %w( masonry.pkgd.min.js )
Rails.application.config.assets.precompile += %w( startup-kit.js )

# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )
