window.__searchindex=({
  "index.html": {
    "title": "docpress",
    "pagetitle": "docpress",
    "slug": "index.html",
    "body": "\nPainless Markdown publishing\n\nDocumentation website generator.\nGenerates great websites from Markdown files.\n"
  },
  "index.html#table-of-contents": {
    "title": "Table of Contents",
    "pagetitle": "docpress",
    "slug": "index.html#table-of-contents",
    "body": "\nWhat is it\nExamples\nUsage\nThanks\n"
  },
  "index.html#what-is-it": {
    "title": "What is it",
    "pagetitle": "docpress",
    "slug": "index.html#what-is-it",
    "body": "Docpress generates websites from your project’s basic documentation; that is, at the very least, a README.md file. It also supports multiple Markdown pages in docs/.\nUnder heavy development now; guides and instructions will magically appear here when we’re stable."
  },
  "index.html#examples": {
    "title": "Examples",
    "pagetitle": "docpress",
    "slug": "index.html#examples",
    "body": "\nhttp://ricostacruz.com/dom101 (single readme)\nhttp://ricostacruz.com/onmount (multiple pages)\n"
  },
  "index.html#usage": {
    "title": "Usage",
    "pagetitle": "docpress",
    "slug": "index.html#usage",
    "body": "Still under heavy development, consider this a preview.\nSee the Getting Started guide for more details.\n$ npm install -g docpress\n$ echo \"# My project\" > README.md\n$ echo \"Documented by Markdown files.\" >> README.md\n$ docpress serve\n\n  Docpress\n  starting development - ^C to exit\n\n  350ms ✓   first build                 \n      on    watching changes\n      on    livereload\n      on    http://localhost:3000\n  \n  Running\n\nLet’s build our first Docpress site.\nQuickstart guide →"
  },
  "index.html#thanks": {
    "title": "Thanks",
    "pagetitle": "docpress",
    "slug": "index.html#thanks",
    "body": "docpress © 2015+, Rico Sta. Cruz. Released under the MIT License.\nAuthored and maintained by Rico Sta. Cruz with help from contributors (list).\n\nricostacruz.com  · \nGitHub @rstacruz  · \nTwitter @rstacruz\n"
  },
  "advanced/gh-pages.html": {
    "title": "Automating GitHub pages",
    "pagetitle": "Automating GitHub pages",
    "slug": "advanced/gh-pages.html",
    "body": "You can use Travis and git-update-ghpages to automatically update your website’s gh-pages branch."
  },
  "advanced/gh-pages.html#generate-a-github-token": {
    "title": "Generate a GitHub token",
    "pagetitle": "Automating GitHub pages",
    "slug": "advanced/gh-pages.html#generate-a-github-token",
    "body": "Generate a GitHub token. Travis will use this to push to your repository on your behalf. You can use any name, but you can call it Travis CI. Keep this token somewhere safe; you can use it for any of your repositories that will need git-update-ghpages deployments.\n\n\n"
  },
  "advanced/gh-pages.html#adding-your-token": {
    "title": "Adding your token",
    "pagetitle": "Automating GitHub pages",
    "slug": "advanced/gh-pages.html#adding-your-token",
    "body": "Make sure Travis is already enabled on your repository. Go to your Travis’s repo’s settings page (https://travis-ci.org/user/repo/settings), and add your token there as GITHUB_TOKEN.\nBe sure to turn off the “show this in build log” option.\n\n\n\nAlternatively, you can also use the Travis CLI tool to add this to your repo as a secure variable:\ntravis encrypt GITHUB_TOKEN=\"your token here\" --add\n"
  },
  "advanced/gh-pages.html#configuring-builds": {
    "title": "Configuring builds",
    "pagetitle": "Automating GitHub pages",
    "slug": "advanced/gh-pages.html#configuring-builds",
    "body": "\nIf you installed Docpress locally in your project, skip to the next section.\n\nAdd this to your .travis.yml manifest. This will make a build happen after your test, then a deployment right after that. In this example, we’re deploying _docs to user/repo."
  },
  "advanced/gh-pages.html#.travis.yml": {
    "title": ".travis.yml",
    "pagetitle": "Automating GitHub pages",
    "slug": "advanced/gh-pages.html#.travis.yml",
    "body": "- language: node_js\n- node_js:\n- - 4\n+ before_install:\n+ - nvm install 4\n"
  },
  "advanced/gh-pages.html#for-node.js-projects": {
    "title": "For Node.js projects",
    "pagetitle": "Automating GitHub pages",
    "slug": "advanced/gh-pages.html#for-node.js-projects",
    "body": "If your project is a Node.js project, you can simplify this by adding docpress and git-update-ghpages to your devDependencies.\nnpm install --save-dev --save-exact docpress\nnpm install --save-dev --save-exact git-update-ghpages\n\n# .travis.yml\nnode_js:\n- 4\n\nenv:\n  global:\n    - GIT_NAME: Travis CI\n    - GIT_EMAIL: nobody@nobody.org\n    - GITHUB_REPO: rstacruz/myproject\n    - GIT_SOURCE: _docpress\n\nscript:\n- rake     # ...or whatever your test command is\n- ./node_modules/.bin/docpress build\n\nafter_success:\n- if [ \"$TRAVIS_BRANCH\" = \"master\" -a \"$TRAVIS_PULL_REQUEST\" = \"false\" ]; then ./node_modules/.bin/git-update-ghpages -e; fi\n"
  },
  "advanced/gh-pages.html#for-non-js-projects": {
    "title": "For non-JS projects",
    "pagetitle": "Automating GitHub pages",
    "slug": "advanced/gh-pages.html#for-non-js-projects",
    "body": "The configuration above has language: node_js, which may not be what you want. In this case, swap out the language and node_js fields to invoke nvm before_install:"
  },
  "advanced/hacking.html": {
    "title": "Hacking Docpress",
    "pagetitle": "Hacking Docpress",
    "slug": "advanced/hacking.html",
    "body": "\nThis article is a stub; you can help by expanding it.\n\nWant to contribute code to Docpress? Here’s how to set up a local development environment."
  },
  "advanced/hacking.html#dev-environment": {
    "title": "Dev environment",
    "pagetitle": "Hacking Docpress",
    "slug": "advanced/hacking.html#dev-environment",
    "body": ""
  },
  "advanced/hacking.html#set-up-a-folder": {
    "title": "Set up a folder",
    "pagetitle": "Hacking Docpress",
    "slug": "advanced/hacking.html#set-up-a-folder",
    "body": "Since docpress is made up of a few repositories, it’d be nice to keep them all in one location.\nmkdir ~/Projects/docpress\ncd ~/Projects/docpress\n"
  },
  "advanced/hacking.html#clone-the-repos": {
    "title": "Clone the repos",
    "pagetitle": "Hacking Docpress",
    "slug": "advanced/hacking.html#clone-the-repos",
    "body": "git clone http://github.com/docpress/docpress.git\ngit clone http://github.com/docpress/docpress-base.git\ngit clone http://github.com/docpress/docpress-core.git\ngit clone http://github.com/docpress/docpress-search.git\n"
  },
  "advanced/hacking.html#link-them-all": {
    "title": "Link them all",
    "pagetitle": "Hacking Docpress",
    "slug": "advanced/hacking.html#link-them-all",
    "body": "Use npm link so you can use them as local development copies.\n(cd docpress && npm link)\n(cd docpress-base && npm link)\n(cd docpress-core && npm link)\n(cd docpress-search && npm link)\n"
  },
  "advanced/hacking.html#use-the-links": {
    "title": "Use the links",
    "pagetitle": "Hacking Docpress",
    "slug": "advanced/hacking.html#use-the-links",
    "body": "Use the linked development copies.\n(cd docpress && npm i && npm link docpress-base && npm link docpress-core)\n(cd docpress-base && npm i && npm link npm link docpress-core)\n(cd docpress-search && npm i && npm link npm link docpress-core)\n"
  },
  "customization/analytics.html": {
    "title": "Google Analytics",
    "pagetitle": "Google Analytics",
    "slug": "customization/analytics.html",
    "body": "Enable Google Analytics tracking in your docpress site by adding the googleAnalytics configuration key in docpress.json."
  },
  "customization/analytics.html#docpress.json": {
    "title": "docpress.json",
    "pagetitle": "Google Analytics",
    "slug": "customization/analytics.html#docpress.json",
    "body": "{\n  \"googleAnalytics\": {\n    \"id\": \"UA-12345678-1\",\n    \"domain\": \"docpress.github.io\"\n  }\n}\n\nThe id is the tracking ID given by Google Analytics. The domain is optional, but if enabled, the analytics code will only be used in this domain; this prevents pageviews from being logged when viewing your site in your local development machine."
  },
  "customization/config.html": {
    "title": "Configuration",
    "pagetitle": "Configuration",
    "slug": "customization/config.html",
    "body": "To set configuration, create a file called docpress.json inside your project’s docs/. Alternatiely, there are also these 2 ways to set configuration:\n\nCreate a file called docpress.json in your project’s root.\nIn your project’s package.json, make a new key called docpress.\n"
  },
  "customization/config.html#example": {
    "title": "Example",
    "pagetitle": "Configuration",
    "slug": "customization/config.html#example",
    "body": "Here’s an example docpress.json:\n{\n  \"docs\": \"docs\",\n  \"github\": \"rstacruz/onmount\"\n}\n\nOr in package.json:\n{\n  \"name\": \"myproject\",\n  \"version\": \"1.0.0\",\n  /* ... */\n  \"docpress\": {\n    \"github\": \"rstacruz/myproject\"\n  }\n}\n"
  },
  "customization/config.html#available-configuration": {
    "title": "Available configuration",
    "pagetitle": "Configuration",
    "slug": "customization/config.html#available-configuration",
    "body": "\n\n\nKey\nDefault\nDescription\n\n\n\n\ndocs\n\"docs\"\nThe documents folder to parse. Defaults to \"docs\". This option is only available if it’s defined on docpress.json (in the project root) or under docpress in package.json.\n\n\ndist\n\"_docpress\"\nThe folder builds are saved to. Defaults to \"_docpress\". This option is only available if it’s defined on docpress.json (in the project root) or under docpress in package.json.\n\n\ngithub\nNone\nThe repo slug (user/repo) for the project. If set, docpress-core will add a link to GitHub from the generated page.\n\n\ncss\nNone\nCSS resources to load. See Custom CSS for details.\n\n\ngoogleAnalytics\nNone\nGoogle Analytics support.\n\n\ngoogleAnalytics.id\nNone\nGoogle Analytics ID.\n\n\ngoogleAnalytics.domain\nNone\nRestrict Google Analytics only to this domain.\n\n\nplugins\n…\nList of plugins. See Using plugins for details.\n\n\nmarkdown\n…\nmarkdown-it options and plugins. See Markdown configuration for details.\n\n\n"
  },
  "customization/css.html": {
    "title": "Custom CSS",
    "pagetitle": "Custom CSS",
    "slug": "customization/css.html",
    "body": "Put your extra CSS files inside the css setting. You can put external files (hosted online), Stylus files (ends in .styl), or local CSS files. For Stylus files and local CSS files, they need to be inside docs/."
  },
  "customization/css.html#docpress.json": {
    "title": "docpress.json",
    "pagetitle": "Custom CSS",
    "slug": "customization/css.html#docpress.json",
    "body": "{\n  \"css\": [\n    \"http://site.com/external.css\",\n    \"docs/style.styl\",\n    \"docs/extra.css\"\n  ]\n}\n\n\nThis article is a stub; you can help by expanding it.\n"
  },
  "customization/markdown.html": {
    "title": "Markdown configuration",
    "pagetitle": "Markdown configuration",
    "slug": "customization/markdown.html",
    "body": "You can customize how Docpress renders your Markdown content to HTML. Place your configuration inside the markdown setting."
  },
  "customization/markdown.html#docpress.json": {
    "title": "docpress.json",
    "pagetitle": "Markdown configuration",
    "slug": "customization/markdown.html#docpress.json",
    "body": "{\n  \"markdown\": {\n    \"plugins\": {\n      \"decorate\": {}\n    }\n  }\n}\n\nThe names (decorate in the example) correspond to an npm package prefixed by markdown-it-. For instance, to load the markdown-it-emoji plugin, use:\n\"emoji\": {}\n\nThe value ({} in the example) are options to be passed onto the plugin. Use {} when you don’t want to pass any options."
  },
  "customization/markdown.html#available-settings": {
    "title": "Available settings",
    "pagetitle": "Markdown configuration",
    "slug": "customization/markdown.html#available-settings",
    "body": "All of markdown-it settings are supported.\n\n\n\nSetting\nDefault\nDescription\n\n\n\n\nhtml\ntrue\nEnable HTML tags\n\n\nxhtmlOut\nfalse\nUse / to close tags (<br />)\n\n\nbreaks\nfalse\nConvert new lines in paragraphs to line breaks\n\n\nlangPrefix\n“lang-”\nCSS language prefix for fenced blocks\n\n\nlinkify\ntrue\nAuto-convert URLs to links\n\n\ntypographer\ntrue\nReplace quotes and such\n\n\nquotes\n'“”‘’\nQuotes to use for typograher setting\n\n\nhighlight\nFunction\nSyntax highlighting function (uses highlight.js by default)\n\n\n"
  },
  "customization/markdown.html#plugins": {
    "title": "Plugins",
    "pagetitle": "Markdown configuration",
    "slug": "customization/markdown.html#plugins",
    "body": "You can also put Markdown-it plugins under the markdown.plugins option. These will allow you to customize Markdown parsing behavior through npm packages; search npm for “markdown-it” to see available plugins."
  },
  "customization/markdown.html#installing-markdown-plugins": {
    "title": "Installing Markdown plugins",
    "pagetitle": "Markdown configuration",
    "slug": "customization/markdown.html#installing-markdown-plugins",
    "body": "To use Markdown plugins, be sure to install them via npm first.\nnpm init  # if you don't have package.json\nnpm install --save --save-exact markdown-it-emoji\n"
  },
  "customization/markdown.html#bundled-plugins": {
    "title": "Bundled plugins",
    "pagetitle": "Markdown configuration",
    "slug": "customization/markdown.html#bundled-plugins",
    "body": "Some officially-endorsed plugins are bundled into docpress-core already. You can use them without installing via npm.\n\ndecorate (markdown-it-decorate) – Enables custom class names.\n"
  },
  "customization/plugins.html": {
    "title": "Using plugins",
    "pagetitle": "Using plugins",
    "slug": "customization/plugins.html",
    "body": "\nThis article is a stub; you can help by expanding it.\n\nTBD"
  },
  "getting-started/images-and-linking.html": {
    "title": "Images and linking",
    "pagetitle": "Images and linking",
    "slug": "getting-started/images-and-linking.html",
    "body": "Link to documents with the .md extension.\nRead more about [installation](install.md).\n\nYou will still need to put it in the TOC. Also, remember all pages need to be in docs/."
  },
  "getting-started/more-pages.html": {
    "title": "Writing more pages",
    "pagetitle": "Writing more pages",
    "slug": "getting-started/more-pages.html",
    "body": "You can create a Table of Contents page to list down pages in your site. All pages must live inside the docs/ folder—Docpress only looks for files in the project root (eg, /README.md) and the docs/ folder (eg, /docs/Introduction.md)."
  },
  "getting-started/more-pages.html#create-your-toc": {
    "title": "Create your TOC",
    "pagetitle": "Writing more pages",
    "slug": "getting-started/more-pages.html#create-your-toc",
    "body": "Create a table of contents as docs/README.md. This is the table of contents: an unordered list of pages to link. Here’s an example that will only have one file (your main README)."
  },
  "getting-started/more-pages.html#docsreadme.md": {
    "title": "docs/README.md",
    "pagetitle": "Writing more pages",
    "slug": "getting-started/more-pages.html#docsreadme.md",
    "body": "* [Your project](../README.md)\n* [Introduction](intro/README.md)\n  * [Getting started](intro/getting-started.md)\n  * [Installation](intro/install.md)\n* [Installation](installation/README.md)\n  * [Mac OS X](installation/osx.md)\n  * [Windows](installation/windows.md)\n"
  },
  "getting-started/more-pages.html#setting-the-home-page": {
    "title": "Setting the home page",
    "pagetitle": "Writing more pages",
    "slug": "getting-started/more-pages.html#setting-the-home-page",
    "body": "The first file in the TOC is always going to be the home page. Its title in the TOC is used as the site’s main title."
  },
  "getting-started/more-pages.html#nesting": {
    "title": "Nesting",
    "pagetitle": "Writing more pages",
    "slug": "getting-started/more-pages.html#nesting",
    "body": "To organize your pages into chapters, you can create sub-lists by indenting items that are under a certain parent. You can nest as far as you want, but it’s only recommended to nest just one level down."
  },
  "getting-started/more-pages.html#non-links": {
    "title": "Non-links",
    "pagetitle": "Writing more pages",
    "slug": "getting-started/more-pages.html#non-links",
    "body": "You don’t need to link all pages—you can create items that are not links. Great for headings or for pages that are yet to be written.\n* [Your project](../README.md)\n* Introduction\n  * [Getting started](intro/getting-started.md)\n  * [Installation](intro/install.md)\n* Installation\n  * [Mac OS X](installation/osx.md)\n  * [Windows](installation/windows.md)\n"
  },
  "getting-started/more-pages.html#relative-and-absolute-paths": {
    "title": "Relative and absolute paths",
    "pagetitle": "Writing more pages",
    "slug": "getting-started/more-pages.html#relative-and-absolute-paths",
    "body": "Links in the TOC can be relative or absolute. In this example, both links are equivalent.\n* [Your project](../README.md)\n* [Your project](/README.md)\n\nYour Docpress site is growing! Why not add some images?\nContinue →"
  },
  "getting-started/quickstart.html": {
    "title": "Quick-start guide",
    "pagetitle": "Quick-start guide",
    "slug": "getting-started/quickstart.html",
    "body": "Docpress is available via npm. It requires Node.js 4.0 or higher.\nnpm install -g docpress\n"
  },
  "getting-started/quickstart.html#local-installation": {
    "title": "Local installation",
    "pagetitle": "Quick-start guide",
    "slug": "getting-started/quickstart.html#local-installation",
    "body": "You can install Docpress locally in your project. This is optional, but greatly preferred. If Docpress is found in the current project, the docpress command will use the docpress installed in your current project.\nnpm init  # ...if you don't have package.json\nnpm install --save-dev --save-exact docpress\n\nAlso, Docpress builds your output into _docpress, which you probably don’t want to commit.\necho _docpress >> .gitignore\n"
  },
  "getting-started/quickstart.html#writing-content": {
    "title": "Writing content",
    "pagetitle": "Quick-start guide",
    "slug": "getting-started/quickstart.html#writing-content",
    "body": "Write your first page. This is usually your project’s README.md. This is a simple Markdown file. Chances are you already have this! You can add more pages later by creating a Table of Contents file (see Writing more pages).\nPages are written in Markdown–an easy-to-read, easy-to-write plain text format. Files have the extension .md. Learn more about Markdown in GitHub’s Markdown Basics guide."
  },
  "getting-started/quickstart.html#readme.md": {
    "title": "README.md",
    "pagetitle": "Quick-start guide",
    "slug": "getting-started/quickstart.html#readme.md",
    "body": "My project\n==========\n\nThis is my project and it is wonderful! Save this file as `README.md`.\n"
  },
  "getting-started/quickstart.html#previewing-your-site": {
    "title": "Previewing your site",
    "pagetitle": "Quick-start guide",
    "slug": "getting-started/quickstart.html#previewing-your-site",
    "body": "Run the local server via docpress s (short for serve). This will build your site into _docpress/ and run a local file server with LiveReload. You can then point your browser to http://localhost:3000.\ndocpress s\n\nYou should now have a basic Docpress website with one page. Let’s write more.\nContinue →"
  }
});
window.__lunrindex=({"version":"0.5.12","fields":[{"name":"title","boost":10},{"name":"pagetitle","boost":3},{"name":"body","boost":1}],"ref":"slug","documentStore":{"store":{"index.html":["docpress","document","file","gener","great","markdown","painless","publish","websit"],"index.html#table-of-contents":["content","docpress","exampl","tabl","thank","usag"],"index.html#what-is-it":["appear","basic","develop","doc","docpress","document","file","gener","guid","heavi","here","instruct","magic","markdown","multipl","now","page","project’","readme.md","stabl","support","under","veri","websit","we’r"],"index.html#examples":["docpress","exampl","http://ricostacruz.com/dom101","http://ricostacruz.com/onmount","multipl","page","readm","singl"],"index.html#usage":["350m","build","c","chang","consid","detail","develop","docpress","document","echo","exit","file","first","g","get","guid","heavi","http://localhost:3000","instal","let’","livereload","markdown","more","npm","preview","project","quickstart","readme.md","run","see","serv","site","start","still","under","usag","watch"],"index.html#thanks":["2015","author","contributor","cruz","docpress","github","help","licens","list","maintain","mit","releas","rico","ricostacruz.com","rstacruz","sta","thank","twitter","under"],"advanced/gh-pages.html":["autom","automat","branch","gh","ghpage","git","github","page","travi","updat","us","website’"],"advanced/gh-pages.html#generate-a-github-token":["autom","behalf","call","ci","deploy","gener","ghpage","git","github","keep","name","need","page","push","repositori","safe","somewher","token","travi","updat","us"],"advanced/gh-pages.html#adding-your-token":["ad","add","alreadi","altern","autom","build","ci.org/user/repo/set","cli","enabl","encrypt","github","github_token","github_token=\"your","go","here","https://travi","log","make","option","page","repo","repositori","repo’","secur","set","show","sure","token","tool","travi","travis’","turn","us","variabl"],"advanced/gh-pages.html#configuring-builds":["_doc","add","autom","build","configur","deploy","docpress","exampl","github","happen","instal","local","make","manifest","next","page","project","right","section","skip","test","travis.yml","user/repo","we’r"],"advanced/gh-pages.html#.travis.yml":["4","autom","before_instal","github","instal","languag","node_j","nvm","page","travis.yml"],"advanced/gh-pages.html#for-node.js-projects":["4","_docpress","ad","after_success","autom","build","ci","command","dev","devdepend","docpress","e","env","exact","fals","fi","ghpage","git","git_email","git_nam","git_sourc","github","github_repo","global","instal","master","nobody@nobody.org","node.j","node_j","node_modules/.bin/docpress","node_modules/.bin/git","npm","page","project","rake","rstacruz/myproject","save","script","simplifi","test","travi","travis.yml","travis_branch","travis_pull_request","updat","whatev"],"advanced/gh-pages.html#for-non-js-projects":["abov","autom","before_instal","case","configur","field","github","invok","js","languag","node_j","non","nvm","out","page","project","swap","want"],"advanced/hacking.html":["articl","code","contribut","develop","docpress","environ","expand","hack","help","here’","local","set","stub","up","want"],"advanced/hacking.html#dev-environment":["dev","docpress","environ","hack"],"advanced/hacking.html#set-up-a-folder":["cd","docpress","few","folder","hack","it’d","keep","locat","made","mkdir","nice","on","projects/docpress","repositori","set","up"],"advanced/hacking.html#clone-the-repos":["base.git","clone","core.git","docpress","git","hack","http://github.com/docpress/docpress","http://github.com/docpress/docpress.git","repo","search.git"],"advanced/hacking.html#link-them-all":["base","cd","copi","core","develop","docpress","hack","link","local","npm","search","us"],"advanced/hacking.html#use-the-links":["base","cd","copi","core","develop","docpress","hack","link","npm","search","us"],"customization/analytics.html":["ad","analyt","configur","docpress","docpress.json","enabl","googl","googleanalyt","key","site","track"],"customization/analytics.html#docpress.json":["1","12345678","analyt","be","code","develop","docpress.github.io","docpress.json","domain","enabl","given","googl","googleanalyt","id","local","log","machin","option","pageview","prevent","site","track","ua","us","view"],"customization/config.html":["2","alternati","call","configur","creat","doc","docpress","docpress.json","file","insid","key","make","new","package.json","project’","root","set","way"],"customization/config.html#example":["1.0.0","configur","doc","docpress","docpress.json","exampl","github","here’","myproject","name","package.json","rstacruz/myproject","rstacruz/onmount","version"],"customization/config.html#available-configuration":["_docpress","add","analyt","avail","build","configur","core","css","custom","default","defin","descript","detail","dist","doc","docpress","docpress.json","document","domain","folder","gener","github","googl","googleanalyt","googleanalytics.domain","googleanalytics.id","id","it’","key","link","list","load","markdown","none","option","package.json","page","pars","plugin","project","repo","resourc","restrict","root","save","see","set","slug","support","under","us","user/repo"],"customization/css.html":["css","custom","doc","end","extern","extra","file","host","insid","local","need","onlin","put","set","styl","stylu"],"customization/css.html#docpress.json":["articl","css","custom","docpress.json","docs/extra.css","docs/style.styl","expand","help","http://site.com/external.css","stub"],"customization/markdown.html":["configur","content","custom","docpress","html","insid","markdown","place","render","set"],"customization/markdown.html#docpress.json":["configur","correspond","decor","docpress.json","don’t","emoji","exampl","instanc","load","markdown","name","npm","onto","option","packag","pass","plugin","prefix","us","valu","want"],"customization/markdown.html#available-settings":["auto","avail","block","br","break","close","configur","convert","css","default","descript","enabl","fals","fenc","function","highlight","highlight.j","html","lang","langprefix","languag","line","link","linkifi","markdown","new","paragraph","prefix","quot","replac","set","such","support","syntax","tag","true","typograh","typograph","url","us","xhtmlout"],"customization/markdown.html#plugins":["allow","avail","behavior","configur","custom","markdown","markdown.plugin","npm","option","packag","pars","plugin","put","search","see","through","under"],"customization/markdown.html#installing-markdown-plugins":["configur","don't","emoji","exact","first","init","instal","markdown","npm","package.json","plugin","save","sure","us","via"],"customization/markdown.html#bundled-plugins":["alreadi","bundl","class","configur","core","custom","decor","docpress","enabl","endors","instal","markdown","name","npm","offici","plugin","us","via","without"],"customization/plugins.html":["articl","expand","help","plugin","stub","tbd","us"],"getting-started/images-and-linking.html":["doc","document","extens","imag","installation](install.md","link","md","more","need","page","put","read","rememb","still","toc"],"getting-started/more-pages.html":["content","creat","doc","docs/introduction.md","down","eg","file","folder","folder—docpress","insid","list","live","look","more","page","project","readme.md","root","site","tabl","write"],"getting-started/more-pages.html#create-your-toc":["content","creat","docs/readme.md","exampl","file","here’","link","list","main","more","on","page","readm","tabl","toc","unord","write"],"getting-started/more-pages.html#docsreadme.md":["docs/readme.md","get","installation](installation/readme.md","installation](intro/install.md","introduction](intro/readme.md","mac","more","os","page","project](../readme.md","started.md","started](intro/get","windows](installation/windows.md","write","x](installation/osx.md"],"getting-started/more-pages.html#setting-the-home-page":["alway","file","first","go","home","main","more","page","set","site’","titl","toc","us","write"],"getting-started/more-pages.html#nesting":["certain","chapter","creat","down","far","indent","item","it’","level","list","more","nest","on","organ","page","parent","recommend","sub","under","want","write"],"getting-started/more-pages.html#non-links":["creat","don’t","get","great","head","instal","installation](intro/install.md","introduct","item","link","mac","more","need","non","os","page","pages—y","project](../readme.md","started.md","started](intro/get","windows](installation/windows.md","write","written","x](installation/osx.md"],"getting-started/more-pages.html#relative-and-absolute-paths":["absolut","add","both","continu","docpress","equival","exampl","grow","imag","link","more","page","path","project](../readme.md","project](/readme.md","rel","site","toc","write"],"getting-started/quickstart.html":["4.0","avail","docpress","g","guid","higher","instal","node.j","npm","quick","requir","start","via"],"getting-started/quickstart.html#local-installation":["_docpress","build","command","commit","current","dev","docpress","don't","don’t","echo","exact","found","gitignor","greatli","guid","init","instal","local","npm","option","output","package.json","prefer","probabl","project","quick","save","start","us","want"],"getting-started/quickstart.html#writing-content":["add","alreadi","basic","chanc","content","creat","easi","extens","file","first","format","github’","guid","later","learn","markdown","markdown–an","md","more","page","plain","project’","quick","read","readme.md","see","simpl","start","tabl","text","usual","write","written"],"getting-started/quickstart.html#readme.md":["file","guid","project","quick","readme.md","save","start","wonder"],"getting-started/quickstart.html#previewing-your-site":["_docpress","basic","browser","build","continu","docpress","file","guid","http://localhost:3000","let’","livereload","local","more","now","on","page","point","preview","quick","run","s","serv","server","short","site","start","via","websit","write"]},"length":46},"tokenStore":{"root":{"1":{"2":{"3":{"4":{"5":{"6":{"7":{"8":{"docs":{"customization/analytics.html#docpress.json":{"ref":"customization/analytics.html#docpress.json","tf":0.034482758620689655}}},"docs":{}},"docs":{}},"docs":{}},"docs":{}},"docs":{}},"docs":{}},"docs":{"customization/analytics.html#docpress.json":{"ref":"customization/analytics.html#docpress.json","tf":0.034482758620689655}},".":{"0":{"docs":{},".":{"0":{"docs":{"customization/config.html#example":{"ref":"customization/config.html#example","tf":0.06666666666666667}}},"docs":{}}},"docs":{}}},"2":{"0":{"1":{"5":{"docs":{"index.html#thanks":{"ref":"index.html#thanks","tf":0.045454545454545456}}},"docs":{}},"docs":{}},"docs":{"customization/config.html":{"ref":"customization/config.html","tf":0.037037037037037035}}},"3":{"5":{"0":{"docs":{},"m":{"docs":{"index.html#usage":{"ref":"index.html#usage","tf":0.021739130434782608}}}},"docs":{}},"docs":{}},"4":{"docs":{"advanced/gh-pages.html#.travis.yml":{"ref":"advanced/gh-pages.html#.travis.yml","tf":0.25},"advanced/gh-pages.html#for-node.js-projects":{"ref":"advanced/gh-pages.html#for-node.js-projects","tf":0.017543859649122806}},".":{"0":{"docs":{"getting-started/quickstart.html":{"ref":"getting-started/quickstart.html","tf":0.08333333333333333}}},"docs":{}}},"docs":{},"d":{"docs":{},"o":{"docs":{},"c":{"docs":{"index.html#what-is-it":{"ref":"index.html#what-is-it","tf":0.04},"customization/config.html":{"ref":"customization/config.html","tf":0.037037037037037035},"customization/config.html#example":{"ref":"customization/config.html#example","tf":0.13333333333333333},"customization/config.html#available-configuration":{"ref":"customization/config.html#available-configuration","tf":0.03296703296703297},"customization/css.html":{"ref":"customization/css.html","tf":0.037037037037037035},"getting-started/images-and-linking.html":{"ref":"getting-started/images-and-linking.html","tf":0.06666666666666667},"getting-started/more-pages.html":{"ref":"getting-started/more-pages.html","tf":0.08695652173913043}},"p":{"docs":{},"r":{"docs":{},"e":{"docs":{},"s":{"docs":{},"s":{"docs":{"index.html":{"ref":"index.html","tf":13},"index.html#table-of-contents":{"ref":"index.html#table-of-contents","tf":3},"index.html#what-is-it":{"ref":"index.html#what-is-it","tf":3.04},"index.html#examples":{"ref":"index.html#examples","tf":3},"index.html#usage":{"ref":"index.html#usage","tf":3.0869565217391304},"index.html#thanks":{"ref":"index.html#thanks","tf":3.0454545454545454},"advanced/gh-pages.html#configuring-builds":{"ref":"advanced/gh-pages.html#configuring-builds","tf":0.047619047619047616},"advanced/gh-pages.html#for-node.js-projects":{"ref":"advanced/gh-pages.html#for-node.js-projects","tf":0.03508771929824561},"advanced/hacking.html":{"ref":"advanced/hacking.html","tf":6.571428571428571},"advanced/hacking.html#dev-environment":{"ref":"advanced/hacking.html#dev-environment","tf":1.5},"advanced/hacking.html#set-up-a-folder":{"ref":"advanced/hacking.html#set-up-a-folder","tf":1.5714285714285714},"advanced/hacking.html#clone-the-repos":{"ref":"advanced/hacking.html#clone-the-repos","tf":1.5},"advanced/hacking.html#link-them-all":{"ref":"advanced/hacking.html#link-them-all","tf":1.6538461538461537},"advanced/hacking.html#use-the-links":{"ref":"advanced/hacking.html#use-the-links","tf":1.7},"customization/analytics.html":{"ref":"customization/analytics.html","tf":0.09090909090909091},"customization/config.html":{"ref":"customization/config.html","tf":0.037037037037037035},"customization/config.html#example":{"ref":"customization/config.html#example","tf":0.06666666666666667},"customization/config.html#available-configuration":{"ref":"customization/config.html#available-configuration","tf":0.03296703296703297},"customization/markdown.html":{"ref":"customization/markdown.html","tf":0.09090909090909091},"customization/markdown.html#bundled-plugins":{"ref":"customization/markdown.html#bundled-plugins","tf":0.05263157894736842},"getting-started/more-pages.html#relative-and-absolute-paths":{"ref":"getting-started/more-pages.html#relative-and-absolute-paths","tf":0.0625},"getting-started/quickstart.html":{"ref":"getting-started/quickstart.html","tf":0.16666666666666666},"getting-started/quickstart.html#local-installation":{"ref":"getting-started/quickstart.html#local-installation","tf":0.15},"getting-started/quickstart.html#previewing-your-site":{"ref":"getting-started/quickstart.html#previewing-your-site","tf":0.0967741935483871}},".":{"docs":{},"j":{"docs":{},"s":{"docs":{},"o":{"docs":{},"n":{"docs":{"customization/analytics.html":{"ref":"customization/analytics.html","tf":0.09090909090909091},"customization/analytics.html#docpress.json":{"ref":"customization/analytics.html#docpress.json","tf":10},"customization/config.html":{"ref":"customization/config.html","tf":0.07407407407407407},"customization/config.html#example":{"ref":"customization/config.html#example","tf":0.06666666666666667},"customization/config.html#available-configuration":{"ref":"customization/config.html#available-configuration","tf":0.02197802197802198},"customization/css.html#docpress.json":{"ref":"customization/css.html#docpress.json","tf":10},"customization/markdown.html#docpress.json":{"ref":"customization/markdown.html#docpress.json","tf":10}}}}}},"g":{"docs":{},"i":{"docs":{},"t":{"docs":{},"h":{"docs":{},"u":{"docs":{},"b":{"docs":{},".":{"docs":{},"i":{"docs":{},"o":{"docs":{"customization/analytics.html#docpress.json":{"ref":"customization/analytics.html#docpress.json","tf":0.034482758620689655}}}}}}}}}}}}}}}}},"u":{"docs":{},"m":{"docs":{},"e":{"docs":{},"n":{"docs":{},"t":{"docs":{"index.html":{"ref":"index.html","tf":0.09090909090909091},"index.html#what-is-it":{"ref":"index.html#what-is-it","tf":0.04},"index.html#usage":{"ref":"index.html#usage","tf":0.021739130434782608},"customization/config.html#available-configuration":{"ref":"customization/config.html#available-configuration","tf":0.01098901098901099},"getting-started/images-and-linking.html":{"ref":"getting-started/images-and-linking.html","tf":0.06666666666666667}}}}}}},"s":{"docs":{},"/":{"docs":{},"e":{"docs":{},"x":{"docs":{},"t":{"docs":{},"r":{"docs":{},"a":{"docs":{},".":{"docs":{},"c":{"docs":{},"s":{"docs":{},"s":{"docs":{"customization/css.html#docpress.json":{"ref":"customization/css.html#docpress.json","tf":0.125}}}}}}}}}}},"s":{"docs":{},"t":{"docs":{},"y":{"docs":{},"l":{"docs":{},"e":{"docs":{},".":{"docs":{},"s":{"docs":{},"t":{"docs":{},"y":{"docs":{},"l":{"docs":{"customization/css.html#docpress.json":{"ref":"customization/css.html#docpress.json","tf":0.125}}}}}}}}}}}},"i":{"docs":{},"n":{"docs":{},"t":{"docs":{},"r":{"docs":{},"o":{"docs":{},"d":{"docs":{},"u":{"docs":{},"c":{"docs":{},"t":{"docs":{},"i":{"docs":{},"o":{"docs":{},"n":{"docs":{},".":{"docs":{},"m":{"docs":{},"d":{"docs":{"getting-started/more-pages.html":{"ref":"getting-started/more-pages.html","tf":0.043478260869565216}}}}}}}}}}}}}}}}},"r":{"docs":{},"e":{"docs":{},"a":{"docs":{},"d":{"docs":{},"m":{"docs":{},"e":{"docs":{},".":{"docs":{},"m":{"docs":{},"d":{"docs":{"getting-started/more-pages.html#create-your-toc":{"ref":"getting-started/more-pages.html#create-your-toc","tf":0.0625},"getting-started/more-pages.html#docsreadme.md":{"ref":"getting-started/more-pages.html#docsreadme.md","tf":10}}}}}}}}}}}}}},"m":{"docs":{},"a":{"docs":{},"i":{"docs":{},"n":{"docs":{"customization/analytics.html#docpress.json":{"ref":"customization/analytics.html#docpress.json","tf":0.10344827586206896},"customization/config.html#available-configuration":{"ref":"customization/config.html#available-configuration","tf":0.01098901098901099}}}}}},"n":{"docs":{},"’":{"docs":{},"t":{"docs":{"customization/markdown.html#docpress.json":{"ref":"customization/markdown.html#docpress.json","tf":0.034482758620689655},"getting-started/more-pages.html#non-links":{"ref":"getting-started/more-pages.html#non-links","tf":0.045454545454545456},"getting-started/quickstart.html#local-installation":{"ref":"getting-started/quickstart.html#local-installation","tf":0.025}}}},"'":{"docs":{},"t":{"docs":{"customization/markdown.html#installing-markdown-plugins":{"ref":"customization/markdown.html#installing-markdown-plugins","tf":0.05263157894736842},"getting-started/quickstart.html#local-installation":{"ref":"getting-started/quickstart.html#local-installation","tf":0.025}}}}},"w":{"docs":{},"n":{"docs":{"getting-started/more-pages.html":{"ref":"getting-started/more-pages.html","tf":0.043478260869565216},"getting-started/more-pages.html#nesting":{"ref":"getting-started/more-pages.html#nesting","tf":0.05}}}}},"e":{"docs":{},"v":{"docs":{"advanced/gh-pages.html#for-node.js-projects":{"ref":"advanced/gh-pages.html#for-node.js-projects","tf":0.03508771929824561},"advanced/hacking.html#dev-environment":{"ref":"advanced/hacking.html#dev-environment","tf":5},"getting-started/quickstart.html#local-installation":{"ref":"getting-started/quickstart.html#local-installation","tf":0.025}},"e":{"docs":{},"l":{"docs":{},"o":{"docs":{},"p":{"docs":{"index.html#what-is-it":{"ref":"index.html#what-is-it","tf":0.04},"index.html#usage":{"ref":"index.html#usage","tf":0.043478260869565216},"advanced/hacking.html":{"ref":"advanced/hacking.html","tf":0.07142857142857142},"advanced/hacking.html#link-them-all":{"ref":"advanced/hacking.html#link-them-all","tf":0.038461538461538464},"advanced/hacking.html#use-the-links":{"ref":"advanced/hacking.html#use-the-links","tf":0.02857142857142857},"customization/analytics.html#docpress.json":{"ref":"customization/analytics.html#docpress.json","tf":0.034482758620689655}}}}}},"d":{"docs":{},"e":{"docs":{},"p":{"docs":{},"e":{"docs":{},"n":{"docs":{},"d":{"docs":{"advanced/gh-pages.html#for-node.js-projects":{"ref":"advanced/gh-pages.html#for-node.js-projects","tf":0.017543859649122806}}}}}}}}},"t":{"docs":{},"a":{"docs":{},"i":{"docs":{},"l":{"docs":{"index.html#usage":{"ref":"index.html#usage","tf":0.021739130434782608},"customization/config.html#available-configuration":{"ref":"customization/config.html#available-configuration","tf":0.03296703296703297}}}}}},"p":{"docs":{},"l":{"docs":{},"o":{"docs":{},"y":{"docs":{"advanced/gh-pages.html#generate-a-github-token":{"ref":"advanced/gh-pages.html#generate-a-github-token","tf":0.041666666666666664},"advanced/gh-pages.html#configuring-builds":{"ref":"advanced/gh-pages.html#configuring-builds","tf":0.09523809523809523}}}}}},"f":{"docs":{},"a":{"docs":{},"u":{"docs":{},"l":{"docs":{},"t":{"docs":{"customization/config.html#available-configuration":{"ref":"customization/config.html#available-configuration","tf":0.03296703296703297},"customization/markdown.html#available-settings":{"ref":"customization/markdown.html#available-settings","tf":0.03571428571428571}}}}}},"i":{"docs":{},"n":{"docs":{"customization/config.html#available-configuration":{"ref":"customization/config.html#available-configuration","tf":0.02197802197802198}}}}},"s":{"docs":{},"c":{"docs":{},"r":{"docs":{},"i":{"docs":{},"p":{"docs":{},"t":{"docs":{"customization/config.html#available-configuration":{"ref":"customization/config.html#available-configuration","tf":0.01098901098901099},"customization/markdown.html#available-settings":{"ref":"customization/markdown.html#available-settings","tf":0.017857142857142856}}}}}}}},"c":{"docs":{},"o":{"docs":{},"r":{"docs":{"customization/markdown.html#docpress.json":{"ref":"customization/markdown.html#docpress.json","tf":0.06896551724137931},"customization/markdown.html#bundled-plugins":{"ref":"customization/markdown.html#bundled-plugins","tf":0.10526315789473684}}}}}},"i":{"docs":{},"s":{"docs":{},"t":{"docs":{"customization/config.html#available-configuration":{"ref":"customization/config.html#available-configuration","tf":0.01098901098901099}}}}}},"f":{"docs":{},"i":{"docs":{"advanced/gh-pages.html#for-node.js-projects":{"ref":"advanced/gh-pages.html#for-node.js-projects","tf":0.017543859649122806}},"l":{"docs":{},"e":{"docs":{"index.html":{"ref":"index.html","tf":0.09090909090909091},"index.html#what-is-it":{"ref":"index.html#what-is-it","tf":0.04},"index.html#usage":{"ref":"index.html#usage","tf":0.021739130434782608},"customization/config.html":{"ref":"customization/config.html","tf":0.07407407407407407},"customization/css.html":{"ref":"customization/css.html","tf":0.2222222222222222},"getting-started/more-pages.html":{"ref":"getting-started/more-pages.html","tf":0.043478260869565216},"getting-started/more-pages.html#create-your-toc":{"ref":"getting-started/more-pages.html#create-your-toc","tf":0.0625},"getting-started/more-pages.html#setting-the-home-page":{"ref":"getting-started/more-pages.html#setting-the-home-page","tf":0.07692307692307693},"getting-started/quickstart.html#writing-content":{"ref":"getting-started/quickstart.html#writing-content","tf":0.06976744186046512},"getting-started/quickstart.html#readme.md":{"ref":"getting-started/quickstart.html#readme.md","tf":0.16666666666666666},"getting-started/quickstart.html#previewing-your-site":{"ref":"getting-started/quickstart.html#previewing-your-site","tf":0.03225806451612903}}}},"r":{"docs":{},"s":{"docs":{},"t":{"docs":{"index.html#usage":{"ref":"index.html#usage","tf":0.043478260869565216},"customization/markdown.html#installing-markdown-plugins":{"ref":"customization/markdown.html#installing-markdown-plugins","tf":0.05263157894736842},"getting-started/more-pages.html#setting-the-home-page":{"ref":"getting-started/more-pages.html#setting-the-home-page","tf":0.07692307692307693},"getting-started/quickstart.html#writing-content":{"ref":"getting-started/quickstart.html#writing-content","tf":0.023255813953488372}}}}},"e":{"docs":{},"l":{"docs":{},"d":{"docs":{"advanced/gh-pages.html#for-non-js-projects":{"ref":"advanced/gh-pages.html#for-non-js-projects","tf":0.07142857142857142}}}}}},"a":{"docs":{},"l":{"docs":{},"s":{"docs":{"advanced/gh-pages.html#for-node.js-projects":{"ref":"advanced/gh-pages.html#for-node.js-projects","tf":0.017543859649122806},"customization/markdown.html#available-settings":{"ref":"customization/markdown.html#available-settings","tf":0.03571428571428571}}}},"r":{"docs":{"getting-started/more-pages.html#nesting":{"ref":"getting-started/more-pages.html#nesting","tf":0.05}}}},"e":{"docs":{},"w":{"docs":{"advanced/hacking.html#set-up-a-folder":{"ref":"advanced/hacking.html#set-up-a-folder","tf":0.07142857142857142}}},"n":{"docs":{},"c":{"docs":{"customization/markdown.html#available-settings":{"ref":"customization/markdown.html#available-settings","tf":0.017857142857142856}}}}},"o":{"docs":{},"l":{"docs":{},"d":{"docs":{},"e":{"docs":{},"r":{"docs":{"advanced/hacking.html#set-up-a-folder":{"ref":"advanced/hacking.html#set-up-a-folder","tf":3.333333333333333},"customization/config.html#available-configuration":{"ref":"customization/config.html#available-configuration","tf":0.02197802197802198},"getting-started/more-pages.html":{"ref":"getting-started/more-pages.html","tf":0.043478260869565216}},"—":{"docs":{},"d":{"docs":{},"o":{"docs":{},"c":{"docs":{},"p":{"docs":{},"r":{"docs":{},"e":{"docs":{},"s":{"docs":{},"s":{"docs":{"getting-started/more-pages.html":{"ref":"getting-started/more-pages.html","tf":0.043478260869565216}}}}}}}}}}}}}}},"u":{"docs":{},"n":{"docs":{},"d":{"docs":{"getting-started/quickstart.html#local-installation":{"ref":"getting-started/quickstart.html#local-installation","tf":0.025}}}}},"r":{"docs":{},"m":{"docs":{},"a":{"docs":{},"t":{"docs":{"getting-started/quickstart.html#writing-content":{"ref":"getting-started/quickstart.html#writing-content","tf":0.023255813953488372}}}}}}},"u":{"docs":{},"n":{"docs":{},"c":{"docs":{},"t":{"docs":{},"i":{"docs":{},"o":{"docs":{},"n":{"docs":{"customization/markdown.html#available-settings":{"ref":"customization/markdown.html#available-settings","tf":0.03571428571428571}}}}}}}}}},"g":{"docs":{"index.html#usage":{"ref":"index.html#usage","tf":0.021739130434782608},"getting-started/quickstart.html":{"ref":"getting-started/quickstart.html","tf":0.08333333333333333}},"e":{"docs":{},"n":{"docs":{},"e":{"docs":{},"r":{"docs":{"index.html":{"ref":"index.html","tf":0.18181818181818182},"index.html#what-is-it":{"ref":"index.html#what-is-it","tf":0.04},"advanced/gh-pages.html#generate-a-github-token":{"ref":"advanced/gh-pages.html#generate-a-github-token","tf":3.3749999999999996},"customization/config.html#available-configuration":{"ref":"customization/config.html#available-configuration","tf":0.01098901098901099}}}}},"t":{"docs":{"index.html#usage":{"ref":"index.html#usage","tf":0.021739130434782608},"getting-started/more-pages.html#docsreadme.md":{"ref":"getting-started/more-pages.html#docsreadme.md","tf":0.09090909090909091},"getting-started/more-pages.html#non-links":{"ref":"getting-started/more-pages.html#non-links","tf":0.045454545454545456}}}},"r":{"docs":{},"e":{"docs":{},"a":{"docs":{},"t":{"docs":{"index.html":{"ref":"index.html","tf":0.09090909090909091},"getting-started/more-pages.html#non-links":{"ref":"getting-started/more-pages.html#non-links","tf":0.045454545454545456}},"l":{"docs":{},"i":{"docs":{"getting-started/quickstart.html#local-installation":{"ref":"getting-started/quickstart.html#local-installation","tf":0.025}}}}}}},"o":{"docs":{},"w":{"docs":{"getting-started/more-pages.html#relative-and-absolute-paths":{"ref":"getting-started/more-pages.html#relative-and-absolute-paths","tf":0.0625}}}}},"u":{"docs":{},"i":{"docs":{},"d":{"docs":{"index.html#what-is-it":{"ref":"index.html#what-is-it","tf":0.04},"index.html#usage":{"ref":"index.html#usage","tf":0.043478260869565216},"getting-started/quickstart.html":{"ref":"getting-started/quickstart.html","tf":4.333333333333333},"getting-started/quickstart.html#local-installation":{"ref":"getting-started/quickstart.html#local-installation","tf":1},"getting-started/quickstart.html#writing-content":{"ref":"getting-started/quickstart.html#writing-content","tf":1.0232558139534884},"getting-started/quickstart.html#readme.md":{"ref":"getting-started/quickstart.html#readme.md","tf":1},"getting-started/quickstart.html#previewing-your-site":{"ref":"getting-started/quickstart.html#previewing-your-site","tf":1}}}}},"i":{"docs":{},"t":{"docs":{"advanced/gh-pages.html":{"ref":"advanced/gh-pages.html","tf":0.09090909090909091},"advanced/gh-pages.html#generate-a-github-token":{"ref":"advanced/gh-pages.html#generate-a-github-token","tf":0.041666666666666664},"advanced/gh-pages.html#for-node.js-projects":{"ref":"advanced/gh-pages.html#for-node.js-projects","tf":0.03508771929824561},"advanced/hacking.html#clone-the-repos":{"ref":"advanced/hacking.html#clone-the-repos","tf":0.26666666666666666}},"h":{"docs":{},"u":{"docs":{},"b":{"docs":{"index.html#thanks":{"ref":"index.html#thanks","tf":0.045454545454545456},"advanced/gh-pages.html":{"ref":"advanced/gh-pages.html","tf":4.333333333333333},"advanced/gh-pages.html#generate-a-github-token":{"ref":"advanced/gh-pages.html#generate-a-github-token","tf":4.375},"advanced/gh-pages.html#adding-your-token":{"ref":"advanced/gh-pages.html#adding-your-token","tf":1},"advanced/gh-pages.html#configuring-builds":{"ref":"advanced/gh-pages.html#configuring-builds","tf":1},"advanced/gh-pages.html#.travis.yml":{"ref":"advanced/gh-pages.html#.travis.yml","tf":1},"advanced/gh-pages.html#for-node.js-projects":{"ref":"advanced/gh-pages.html#for-node.js-projects","tf":1},"advanced/gh-pages.html#for-non-js-projects":{"ref":"advanced/gh-pages.html#for-non-js-projects","tf":1},"customization/config.html#example":{"ref":"customization/config.html#example","tf":0.13333333333333333},"customization/config.html#available-configuration":{"ref":"customization/config.html#available-configuration","tf":0.02197802197802198}},"_":{"docs":{},"t":{"docs":{},"o":{"docs":{},"k":{"docs":{},"e":{"docs":{},"n":{"docs":{"advanced/gh-pages.html#adding-your-token":{"ref":"advanced/gh-pages.html#adding-your-token","tf":0.02702702702702703}},"=":{"docs":{},"\"":{"docs":{},"y":{"docs":{},"o":{"docs":{},"u":{"docs":{},"r":{"docs":{"advanced/gh-pages.html#adding-your-token":{"ref":"advanced/gh-pages.html#adding-your-token","tf":0.02702702702702703}}}}}}}}}}}}},"r":{"docs":{},"e":{"docs":{},"p":{"docs":{},"o":{"docs":{"advanced/gh-pages.html#for-node.js-projects":{"ref":"advanced/gh-pages.html#for-node.js-projects","tf":0.017543859649122806}}}}}}},"’":{"docs":{"getting-started/quickstart.html#writing-content":{"ref":"getting-started/quickstart.html#writing-content","tf":0.023255813953488372}}}}}},"_":{"docs":{},"e":{"docs":{},"m":{"docs":{},"a":{"docs":{},"i":{"docs":{},"l":{"docs":{"advanced/gh-pages.html#for-node.js-projects":{"ref":"advanced/gh-pages.html#for-node.js-projects","tf":0.017543859649122806}}}}}}},"n":{"docs":{},"a":{"docs":{},"m":{"docs":{"advanced/gh-pages.html#for-node.js-projects":{"ref":"advanced/gh-pages.html#for-node.js-projects","tf":0.017543859649122806}}}}},"s":{"docs":{},"o":{"docs":{},"u":{"docs":{},"r":{"docs":{},"c":{"docs":{"advanced/gh-pages.html#for-node.js-projects":{"ref":"advanced/gh-pages.html#for-node.js-projects","tf":0.017543859649122806}}}}}}}},"i":{"docs":{},"g":{"docs":{},"n":{"docs":{},"o":{"docs":{},"r":{"docs":{"getting-started/quickstart.html#local-installation":{"ref":"getting-started/quickstart.html#local-installation","tf":0.025}}}}}}}},"v":{"docs":{},"e":{"docs":{},"n":{"docs":{"customization/analytics.html#docpress.json":{"ref":"customization/analytics.html#docpress.json","tf":0.034482758620689655}}}}}},"h":{"docs":{"advanced/gh-pages.html":{"ref":"advanced/gh-pages.html","tf":0.09090909090909091}},"p":{"docs":{},"a":{"docs":{},"g":{"docs":{},"e":{"docs":{"advanced/gh-pages.html":{"ref":"advanced/gh-pages.html","tf":0.09090909090909091},"advanced/gh-pages.html#generate-a-github-token":{"ref":"advanced/gh-pages.html#generate-a-github-token","tf":0.041666666666666664},"advanced/gh-pages.html#for-node.js-projects":{"ref":"advanced/gh-pages.html#for-node.js-projects","tf":0.05263157894736842}}}}}}},"o":{"docs":{"advanced/gh-pages.html#adding-your-token":{"ref":"advanced/gh-pages.html#adding-your-token","tf":0.02702702702702703},"getting-started/more-pages.html#setting-the-home-page":{"ref":"getting-started/more-pages.html#setting-the-home-page","tf":0.07692307692307693}},"o":{"docs":{},"g":{"docs":{},"l":{"docs":{"customization/analytics.html":{"ref":"customization/analytics.html","tf":6.590909090909091},"customization/analytics.html#docpress.json":{"ref":"customization/analytics.html#docpress.json","tf":1.5344827586206897},"customization/config.html#available-configuration":{"ref":"customization/config.html#available-configuration","tf":0.03296703296703297}},"e":{"docs":{},"a":{"docs":{},"n":{"docs":{},"a":{"docs":{},"l":{"docs":{},"y":{"docs":{},"t":{"docs":{"customization/analytics.html":{"ref":"customization/analytics.html","tf":0.09090909090909091},"customization/analytics.html#docpress.json":{"ref":"customization/analytics.html#docpress.json","tf":0.034482758620689655},"customization/config.html#available-configuration":{"ref":"customization/config.html#available-configuration","tf":0.01098901098901099}},"i":{"docs":{},"c":{"docs":{},"s":{"docs":{},".":{"docs":{},"d":{"docs":{},"o":{"docs":{},"m":{"docs":{},"a":{"docs":{},"i":{"docs":{},"n":{"docs":{"customization/config.html#available-configuration":{"ref":"customization/config.html#available-configuration","tf":0.01098901098901099}}}}}}}},"i":{"docs":{},"d":{"docs":{"customization/config.html#available-configuration":{"ref":"customization/config.html#available-configuration","tf":0.01098901098901099}}}}}}}}}}}}}}}}}}},"l":{"docs":{},"o":{"docs":{},"b":{"docs":{},"a":{"docs":{},"l":{"docs":{"advanced/gh-pages.html#for-node.js-projects":{"ref":"advanced/gh-pages.html#for-node.js-projects","tf":0.017543859649122806}}}}}}}},"m":{"docs":{},"a":{"docs":{},"r":{"docs":{},"k":{"docs":{},"d":{"docs":{},"o":{"docs":{},"w":{"docs":{},"n":{"docs":{"index.html":{"ref":"index.html","tf":0.18181818181818182},"index.html#what-is-it":{"ref":"index.html#what-is-it","tf":0.04},"index.html#usage":{"ref":"index.html#usage","tf":0.021739130434782608},"customization/config.html#available-configuration":{"ref":"customization/config.html#available-configuration","tf":0.03296703296703297},"customization/markdown.html":{"ref":"customization/markdown.html","tf":6.681818181818182},"customization/markdown.html#docpress.json":{"ref":"customization/markdown.html#docpress.json","tf":1.603448275862069},"customization/markdown.html#available-settings":{"ref":"customization/markdown.html#available-settings","tf":1.5178571428571428},"customization/markdown.html#plugins":{"ref":"customization/markdown.html#plugins","tf":1.65},"customization/markdown.html#installing-markdown-plugins":{"ref":"customization/markdown.html#installing-markdown-plugins","tf":4.93859649122807},"customization/markdown.html#bundled-plugins":{"ref":"customization/markdown.html#bundled-plugins","tf":1.5526315789473684},"getting-started/quickstart.html#writing-content":{"ref":"getting-started/quickstart.html#writing-content","tf":0.06976744186046512}},".":{"docs":{},"p":{"docs":{},"l":{"docs":{},"u":{"docs":{},"g":{"docs":{},"i":{"docs":{},"n":{"docs":{"customization/markdown.html#plugins":{"ref":"customization/markdown.html#plugins","tf":0.05}}}}}}}}},"–":{"docs":{},"a":{"docs":{},"n":{"docs":{"getting-started/quickstart.html#writing-content":{"ref":"getting-started/quickstart.html#writing-content","tf":0.023255813953488372}}}}}}}}}}},"g":{"docs":{},"i":{"docs":{},"c":{"docs":{"index.html#what-is-it":{"ref":"index.html#what-is-it","tf":0.04}}}}},"i":{"docs":{},"n":{"docs":{"getting-started/more-pages.html#create-your-toc":{"ref":"getting-started/more-pages.html#create-your-toc","tf":0.0625},"getting-started/more-pages.html#setting-the-home-page":{"ref":"getting-started/more-pages.html#setting-the-home-page","tf":0.07692307692307693}},"t":{"docs":{},"a":{"docs":{},"i":{"docs":{},"n":{"docs":{"index.html#thanks":{"ref":"index.html#thanks","tf":0.045454545454545456}}}}}}}},"k":{"docs":{},"e":{"docs":{"advanced/gh-pages.html#adding-your-token":{"ref":"advanced/gh-pages.html#adding-your-token","tf":0.02702702702702703},"advanced/gh-pages.html#configuring-builds":{"ref":"advanced/gh-pages.html#configuring-builds","tf":0.047619047619047616},"customization/config.html":{"ref":"customization/config.html","tf":0.037037037037037035}}}},"n":{"docs":{},"i":{"docs":{},"f":{"docs":{},"e":{"docs":{},"s":{"docs":{},"t":{"docs":{"advanced/gh-pages.html#configuring-builds":{"ref":"advanced/gh-pages.html#configuring-builds","tf":0.047619047619047616}}}}}}}},"s":{"docs":{},"t":{"docs":{},"e":{"docs":{},"r":{"docs":{"advanced/gh-pages.html#for-node.js-projects":{"ref":"advanced/gh-pages.html#for-node.js-projects","tf":0.017543859649122806}}}}}},"d":{"docs":{},"e":{"docs":{"advanced/hacking.html#set-up-a-folder":{"ref":"advanced/hacking.html#set-up-a-folder","tf":0.07142857142857142}}}},"c":{"docs":{"getting-started/more-pages.html#docsreadme.md":{"ref":"getting-started/more-pages.html#docsreadme.md","tf":0.09090909090909091},"getting-started/more-pages.html#non-links":{"ref":"getting-started/more-pages.html#non-links","tf":0.045454545454545456}},"h":{"docs":{},"i":{"docs":{},"n":{"docs":{"customization/analytics.html#docpress.json":{"ref":"customization/analytics.html#docpress.json","tf":0.034482758620689655}}}}}}},"u":{"docs":{},"l":{"docs":{},"t":{"docs":{},"i":{"docs":{},"p":{"docs":{},"l":{"docs":{"index.html#what-is-it":{"ref":"index.html#what-is-it","tf":0.04},"index.html#examples":{"ref":"index.html#examples","tf":0.16666666666666666}}}}}}}},"o":{"docs":{},"r":{"docs":{},"e":{"docs":{"index.html#usage":{"ref":"index.html#usage","tf":0.021739130434782608},"getting-started/images-and-linking.html":{"ref":"getting-started/images-and-linking.html","tf":0.06666666666666667},"getting-started/more-pages.html":{"ref":"getting-started/more-pages.html","tf":4.333333333333333},"getting-started/more-pages.html#create-your-toc":{"ref":"getting-started/more-pages.html#create-your-toc","tf":1},"getting-started/more-pages.html#docsreadme.md":{"ref":"getting-started/more-pages.html#docsreadme.md","tf":1},"getting-started/more-pages.html#setting-the-home-page":{"ref":"getting-started/more-pages.html#setting-the-home-page","tf":1},"getting-started/more-pages.html#nesting":{"ref":"getting-started/more-pages.html#nesting","tf":1},"getting-started/more-pages.html#non-links":{"ref":"getting-started/more-pages.html#non-links","tf":1},"getting-started/more-pages.html#relative-and-absolute-paths":{"ref":"getting-started/more-pages.html#relative-and-absolute-paths","tf":1},"getting-started/quickstart.html#writing-content":{"ref":"getting-started/quickstart.html#writing-content","tf":0.06976744186046512},"getting-started/quickstart.html#previewing-your-site":{"ref":"getting-started/quickstart.html#previewing-your-site","tf":0.03225806451612903}}}}},"i":{"docs":{},"t":{"docs":{"index.html#thanks":{"ref":"index.html#thanks","tf":0.045454545454545456}}}},"k":{"docs":{},"d":{"docs":{},"i":{"docs":{},"r":{"docs":{"advanced/hacking.html#set-up-a-folder":{"ref":"advanced/hacking.html#set-up-a-folder","tf":0.07142857142857142}}}}}},"y":{"docs":{},"p":{"docs":{},"r":{"docs":{},"o":{"docs":{},"j":{"docs":{},"e":{"docs":{},"c":{"docs":{},"t":{"docs":{"customization/config.html#example":{"ref":"customization/config.html#example","tf":0.06666666666666667}}}}}}}}}},"d":{"docs":{"getting-started/images-and-linking.html":{"ref":"getting-started/images-and-linking.html","tf":0.06666666666666667},"getting-started/quickstart.html#writing-content":{"ref":"getting-started/quickstart.html#writing-content","tf":0.023255813953488372}}}},"p":{"docs":{},"a":{"docs":{},"i":{"docs":{},"n":{"docs":{},"l":{"docs":{},"e":{"docs":{},"s":{"docs":{},"s":{"docs":{"index.html":{"ref":"index.html","tf":0.09090909090909091}}}}}}}},"g":{"docs":{},"e":{"docs":{"index.html#what-is-it":{"ref":"index.html#what-is-it","tf":0.04},"index.html#examples":{"ref":"index.html#examples","tf":0.16666666666666666},"advanced/gh-pages.html":{"ref":"advanced/gh-pages.html","tf":4.424242424242424},"advanced/gh-pages.html#generate-a-github-token":{"ref":"advanced/gh-pages.html#generate-a-github-token","tf":1},"advanced/gh-pages.html#adding-your-token":{"ref":"advanced/gh-pages.html#adding-your-token","tf":1.027027027027027},"advanced/gh-pages.html#configuring-builds":{"ref":"advanced/gh-pages.html#configuring-builds","tf":1},"advanced/gh-pages.html#.travis.yml":{"ref":"advanced/gh-pages.html#.travis.yml","tf":1},"advanced/gh-pages.html#for-node.js-projects":{"ref":"advanced/gh-pages.html#for-node.js-projects","tf":1},"advanced/gh-pages.html#for-non-js-projects":{"ref":"advanced/gh-pages.html#for-non-js-projects","tf":1},"customization/config.html#available-configuration":{"ref":"customization/config.html#available-configuration","tf":0.01098901098901099},"getting-started/images-and-linking.html":{"ref":"getting-started/images-and-linking.html","tf":0.06666666666666667},"getting-started/more-pages.html":{"ref":"getting-started/more-pages.html","tf":4.463768115942028},"getting-started/more-pages.html#create-your-toc":{"ref":"getting-started/more-pages.html#create-your-toc","tf":1.0625},"getting-started/more-pages.html#docsreadme.md":{"ref":"getting-started/more-pages.html#docsreadme.md","tf":1},"getting-started/more-pages.html#setting-the-home-page":{"ref":"getting-started/more-pages.html#setting-the-home-page","tf":4.41025641025641},"getting-started/more-pages.html#nesting":{"ref":"getting-started/more-pages.html#nesting","tf":1.05},"getting-started/more-pages.html#non-links":{"ref":"getting-started/more-pages.html#non-links","tf":1.0454545454545454},"getting-started/more-pages.html#relative-and-absolute-paths":{"ref":"getting-started/more-pages.html#relative-and-absolute-paths","tf":1},"getting-started/quickstart.html#writing-content":{"ref":"getting-started/quickstart.html#writing-content","tf":0.09302325581395349},"getting-started/quickstart.html#previewing-your-site":{"ref":"getting-started/quickstart.html#previewing-your-site","tf":0.03225806451612903}},"v":{"docs":{},"i":{"docs":{},"e":{"docs":{},"w":{"docs":{"customization/analytics.html#docpress.json":{"ref":"customization/analytics.html#docpress.json","tf":0.034482758620689655}}}}}},"s":{"docs":{},"—":{"docs":{},"y":{"docs":{"getting-started/more-pages.html#non-links":{"ref":"getting-started/more-pages.html#non-links","tf":0.045454545454545456}}}}}}},"c":{"docs":{},"k":{"docs":{},"a":{"docs":{},"g":{"docs":{"customization/markdown.html#docpress.json":{"ref":"customization/markdown.html#docpress.json","tf":0.034482758620689655},"customization/markdown.html#plugins":{"ref":"customization/markdown.html#plugins","tf":0.05}},"e":{"docs":{},".":{"docs":{},"j":{"docs":{},"s":{"docs":{},"o":{"docs":{},"n":{"docs":{"customization/config.html":{"ref":"customization/config.html","tf":0.037037037037037035},"customization/config.html#example":{"ref":"customization/config.html#example","tf":0.06666666666666667},"customization/config.html#available-configuration":{"ref":"customization/config.html#available-configuration","tf":0.02197802197802198},"customization/markdown.html#installing-markdown-plugins":{"ref":"customization/markdown.html#installing-markdown-plugins","tf":0.05263157894736842},"getting-started/quickstart.html#local-installation":{"ref":"getting-started/quickstart.html#local-installation","tf":0.025}}}}}}}}}}}},"r":{"docs":{},"s":{"docs":{"customization/config.html#available-configuration":{"ref":"customization/config.html#available-configuration","tf":0.01098901098901099},"customization/markdown.html#plugins":{"ref":"customization/markdown.html#plugins","tf":0.05}}},"a":{"docs":{},"g":{"docs":{},"r":{"docs":{},"a":{"docs":{},"p":{"docs":{},"h":{"docs":{"customization/markdown.html#available-settings":{"ref":"customization/markdown.html#available-settings","tf":0.017857142857142856}}}}}}}},"e":{"docs":{},"n":{"docs":{},"t":{"docs":{"getting-started/more-pages.html#nesting":{"ref":"getting-started/more-pages.html#nesting","tf":0.05}}}}}},"s":{"docs":{},"s":{"docs":{"customization/markdown.html#docpress.json":{"ref":"customization/markdown.html#docpress.json","tf":0.06896551724137931}}}},"t":{"docs":{},"h":{"docs":{"getting-started/more-pages.html#relative-and-absolute-paths":{"ref":"getting-started/more-pages.html#relative-and-absolute-paths","tf":3.333333333333333}}}}},"u":{"docs":{},"b":{"docs":{},"l":{"docs":{},"i":{"docs":{},"s":{"docs":{},"h":{"docs":{"index.html":{"ref":"index.html","tf":0.09090909090909091}}}}}}},"s":{"docs":{},"h":{"docs":{"advanced/gh-pages.html#generate-a-github-token":{"ref":"advanced/gh-pages.html#generate-a-github-token","tf":0.041666666666666664}}}},"t":{"docs":{"customization/css.html":{"ref":"customization/css.html","tf":0.07407407407407407},"customization/markdown.html#plugins":{"ref":"customization/markdown.html#plugins","tf":0.05},"getting-started/images-and-linking.html":{"ref":"getting-started/images-and-linking.html","tf":0.06666666666666667}}}},"r":{"docs":{},"o":{"docs":{},"j":{"docs":{},"e":{"docs":{},"c":{"docs":{},"t":{"docs":{"index.html#usage":{"ref":"index.html#usage","tf":0.021739130434782608},"advanced/gh-pages.html#configuring-builds":{"ref":"advanced/gh-pages.html#configuring-builds","tf":0.047619047619047616},"advanced/gh-pages.html#for-node.js-projects":{"ref":"advanced/gh-pages.html#for-node.js-projects","tf":5.035087719298246},"advanced/gh-pages.html#for-non-js-projects":{"ref":"advanced/gh-pages.html#for-non-js-projects","tf":3.333333333333333},"customization/config.html#available-configuration":{"ref":"customization/config.html#available-configuration","tf":0.03296703296703297},"getting-started/more-pages.html":{"ref":"getting-started/more-pages.html","tf":0.043478260869565216},"getting-started/quickstart.html#local-installation":{"ref":"getting-started/quickstart.html#local-installation","tf":0.075},"getting-started/quickstart.html#readme.md":{"ref":"getting-started/quickstart.html#readme.md","tf":0.3333333333333333}},"’":{"docs":{"index.html#what-is-it":{"ref":"index.html#what-is-it","tf":0.04},"customization/config.html":{"ref":"customization/config.html","tf":0.1111111111111111},"getting-started/quickstart.html#writing-content":{"ref":"getting-started/quickstart.html#writing-content","tf":0.023255813953488372}}},"s":{"docs":{},"/":{"docs":{},"d":{"docs":{},"o":{"docs":{},"c":{"docs":{},"p":{"docs":{},"r":{"docs":{},"e":{"docs":{},"s":{"docs":{},"s":{"docs":{"advanced/hacking.html#set-up-a-folder":{"ref":"advanced/hacking.html#set-up-a-folder","tf":0.14285714285714285}}}}}}}}}}}},"]":{"docs":{},"(":{"docs":{},".":{"docs":{},".":{"docs":{},"/":{"docs":{},"r":{"docs":{},"e":{"docs":{},"a":{"docs":{},"d":{"docs":{},"m":{"docs":{},"e":{"docs":{},".":{"docs":{},"m":{"docs":{},"d":{"docs":{"getting-started/more-pages.html#docsreadme.md":{"ref":"getting-started/more-pages.html#docsreadme.md","tf":0.09090909090909091},"getting-started/more-pages.html#non-links":{"ref":"getting-started/more-pages.html#non-links","tf":0.045454545454545456},"getting-started/more-pages.html#relative-and-absolute-paths":{"ref":"getting-started/more-pages.html#relative-and-absolute-paths","tf":0.0625}}}}}}}}}}}}}},"/":{"docs":{},"r":{"docs":{},"e":{"docs":{},"a":{"docs":{},"d":{"docs":{},"m":{"docs":{},"e":{"docs":{},".":{"docs":{},"m":{"docs":{},"d":{"docs":{"getting-started/more-pages.html#relative-and-absolute-paths":{"ref":"getting-started/more-pages.html#relative-and-absolute-paths","tf":0.0625}}}}}}}}}}}}}}}}}},"b":{"docs":{},"a":{"docs":{},"b":{"docs":{},"l":{"docs":{"getting-started/quickstart.html#local-installation":{"ref":"getting-started/quickstart.html#local-installation","tf":0.025}}}}}}},"e":{"docs":{},"v":{"docs":{},"i":{"docs":{},"e":{"docs":{},"w":{"docs":{"index.html#usage":{"ref":"index.html#usage","tf":0.021739130434782608},"getting-started/quickstart.html#previewing-your-site":{"ref":"getting-started/quickstart.html#previewing-your-site","tf":5}}}}},"e":{"docs":{},"n":{"docs":{},"t":{"docs":{"customization/analytics.html#docpress.json":{"ref":"customization/analytics.html#docpress.json","tf":0.034482758620689655}}}}}},"f":{"docs":{},"i":{"docs":{},"x":{"docs":{"customization/markdown.html#docpress.json":{"ref":"customization/markdown.html#docpress.json","tf":0.034482758620689655},"customization/markdown.html#available-settings":{"ref":"customization/markdown.html#available-settings","tf":0.017857142857142856}}}},"e":{"docs":{},"r":{"docs":{"getting-started/quickstart.html#local-installation":{"ref":"getting-started/quickstart.html#local-installation","tf":0.025}}}}}}},"l":{"docs":{},"u":{"docs":{},"g":{"docs":{},"i":{"docs":{},"n":{"docs":{"customization/config.html#available-configuration":{"ref":"customization/config.html#available-configuration","tf":0.04395604395604396},"customization/markdown.html#docpress.json":{"ref":"customization/markdown.html#docpress.json","tf":0.10344827586206896},"customization/markdown.html#plugins":{"ref":"customization/markdown.html#plugins","tf":10.1},"customization/markdown.html#installing-markdown-plugins":{"ref":"customization/markdown.html#installing-markdown-plugins","tf":3.3859649122807016},"customization/markdown.html#bundled-plugins":{"ref":"customization/markdown.html#bundled-plugins","tf":5.052631578947368},"customization/plugins.html":{"ref":"customization/plugins.html","tf":6.5}}}}}},"a":{"docs":{},"c":{"docs":{},"e":{"docs":{"customization/markdown.html":{"ref":"customization/markdown.html","tf":0.09090909090909091}}}},"i":{"docs":{},"n":{"docs":{"getting-started/quickstart.html#writing-content":{"ref":"getting-started/quickstart.html#writing-content","tf":0.023255813953488372}}}}}},"o":{"docs":{},"i":{"docs":{},"n":{"docs":{},"t":{"docs":{"getting-started/quickstart.html#previewing-your-site":{"ref":"getting-started/quickstart.html#previewing-your-site","tf":0.03225806451612903}}}}}}},"w":{"docs":{},"e":{"docs":{},"b":{"docs":{},"s":{"docs":{},"i":{"docs":{},"t":{"docs":{"index.html":{"ref":"index.html","tf":0.18181818181818182},"index.html#what-is-it":{"ref":"index.html#what-is-it","tf":0.04},"getting-started/quickstart.html#previewing-your-site":{"ref":"getting-started/quickstart.html#previewing-your-site","tf":0.03225806451612903}},"e":{"docs":{},"’":{"docs":{"advanced/gh-pages.html":{"ref":"advanced/gh-pages.html","tf":0.09090909090909091}}}}}}}},"’":{"docs":{},"r":{"docs":{"index.html#what-is-it":{"ref":"index.html#what-is-it","tf":0.04},"advanced/gh-pages.html#configuring-builds":{"ref":"advanced/gh-pages.html#configuring-builds","tf":0.047619047619047616}}}}},"a":{"docs":{},"t":{"docs":{},"c":{"docs":{},"h":{"docs":{"index.html#usage":{"ref":"index.html#usage","tf":0.021739130434782608}}}}},"n":{"docs":{},"t":{"docs":{"advanced/gh-pages.html#for-non-js-projects":{"ref":"advanced/gh-pages.html#for-non-js-projects","tf":0.07142857142857142},"advanced/hacking.html":{"ref":"advanced/hacking.html","tf":0.07142857142857142},"customization/markdown.html#docpress.json":{"ref":"customization/markdown.html#docpress.json","tf":0.034482758620689655},"getting-started/more-pages.html#nesting":{"ref":"getting-started/more-pages.html#nesting","tf":0.05},"getting-started/quickstart.html#local-installation":{"ref":"getting-started/quickstart.html#local-installation","tf":0.025}}}},"y":{"docs":{"customization/config.html":{"ref":"customization/config.html","tf":0.037037037037037035}}}},"h":{"docs":{},"a":{"docs":{},"t":{"docs":{},"e":{"docs":{},"v":{"docs":{"advanced/gh-pages.html#for-node.js-projects":{"ref":"advanced/gh-pages.html#for-node.js-projects","tf":0.017543859649122806}}}}}}},"i":{"docs":{},"t":{"docs":{},"h":{"docs":{},"o":{"docs":{},"u":{"docs":{},"t":{"docs":{"customization/markdown.html#bundled-plugins":{"ref":"customization/markdown.html#bundled-plugins","tf":0.05263157894736842}}}}}}},"n":{"docs":{},"d":{"docs":{},"o":{"docs":{},"w":{"docs":{},"s":{"docs":{},"]":{"docs":{},"(":{"docs":{},"i":{"docs":{},"n":{"docs":{},"s":{"docs":{},"t":{"docs":{},"a":{"docs":{},"l":{"docs":{},"l":{"docs":{},"a":{"docs":{},"t":{"docs":{},"i":{"docs":{},"o":{"docs":{},"n":{"docs":{},"/":{"docs":{},"w":{"docs":{},"i":{"docs":{},"n":{"docs":{},"d":{"docs":{},"o":{"docs":{},"w":{"docs":{},"s":{"docs":{},".":{"docs":{},"m":{"docs":{},"d":{"docs":{"getting-started/more-pages.html#docsreadme.md":{"ref":"getting-started/more-pages.html#docsreadme.md","tf":0.09090909090909091},"getting-started/more-pages.html#non-links":{"ref":"getting-started/more-pages.html#non-links","tf":0.045454545454545456}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}},"r":{"docs":{},"i":{"docs":{},"t":{"docs":{},"e":{"docs":{"getting-started/more-pages.html":{"ref":"getting-started/more-pages.html","tf":4.333333333333333},"getting-started/more-pages.html#create-your-toc":{"ref":"getting-started/more-pages.html#create-your-toc","tf":1},"getting-started/more-pages.html#docsreadme.md":{"ref":"getting-started/more-pages.html#docsreadme.md","tf":1},"getting-started/more-pages.html#setting-the-home-page":{"ref":"getting-started/more-pages.html#setting-the-home-page","tf":1},"getting-started/more-pages.html#nesting":{"ref":"getting-started/more-pages.html#nesting","tf":1},"getting-started/more-pages.html#non-links":{"ref":"getting-started/more-pages.html#non-links","tf":1},"getting-started/more-pages.html#relative-and-absolute-paths":{"ref":"getting-started/more-pages.html#relative-and-absolute-paths","tf":1},"getting-started/quickstart.html#writing-content":{"ref":"getting-started/quickstart.html#writing-content","tf":5.069767441860465},"getting-started/quickstart.html#previewing-your-site":{"ref":"getting-started/quickstart.html#previewing-your-site","tf":0.03225806451612903}}},"t":{"docs":{},"e":{"docs":{},"n":{"docs":{"getting-started/more-pages.html#non-links":{"ref":"getting-started/more-pages.html#non-links","tf":0.045454545454545456},"getting-started/quickstart.html#writing-content":{"ref":"getting-started/quickstart.html#writing-content","tf":0.023255813953488372}}}}}}}},"o":{"docs":{},"n":{"docs":{},"d":{"docs":{},"e":{"docs":{},"r":{"docs":{"getting-started/quickstart.html#readme.md":{"ref":"getting-started/quickstart.html#readme.md","tf":0.16666666666666666}}}}}}}},"c":{"docs":{"index.html#usage":{"ref":"index.html#usage","tf":0.021739130434782608}},"o":{"docs":{},"n":{"docs":{},"t":{"docs":{},"e":{"docs":{},"n":{"docs":{},"t":{"docs":{"index.html#table-of-contents":{"ref":"index.html#table-of-contents","tf":5},"customization/markdown.html":{"ref":"customization/markdown.html","tf":0.09090909090909091},"getting-started/more-pages.html":{"ref":"getting-started/more-pages.html","tf":0.043478260869565216},"getting-started/more-pages.html#create-your-toc":{"ref":"getting-started/more-pages.html#create-your-toc","tf":0.125},"getting-started/quickstart.html#writing-content":{"ref":"getting-started/quickstart.html#writing-content","tf":5.023255813953488}}}}},"r":{"docs":{},"i":{"docs":{},"b":{"docs":{},"u":{"docs":{},"t":{"docs":{"advanced/hacking.html":{"ref":"advanced/hacking.html","tf":0.07142857142857142}},"o":{"docs":{},"r":{"docs":{"index.html#thanks":{"ref":"index.html#thanks","tf":0.045454545454545456}}}}}}}}},"i":{"docs":{},"n":{"docs":{},"u":{"docs":{"getting-started/more-pages.html#relative-and-absolute-paths":{"ref":"getting-started/more-pages.html#relative-and-absolute-paths","tf":0.0625},"getting-started/quickstart.html#previewing-your-site":{"ref":"getting-started/quickstart.html#previewing-your-site","tf":0.03225806451612903}}}}}},"s":{"docs":{},"i":{"docs":{},"d":{"docs":{"index.html#usage":{"ref":"index.html#usage","tf":0.021739130434782608}}}}},"f":{"docs":{},"i":{"docs":{},"g":{"docs":{},"u":{"docs":{},"r":{"docs":{"advanced/gh-pages.html#configuring-builds":{"ref":"advanced/gh-pages.html#configuring-builds","tf":5},"advanced/gh-pages.html#for-non-js-projects":{"ref":"advanced/gh-pages.html#for-non-js-projects","tf":0.07142857142857142},"customization/analytics.html":{"ref":"customization/analytics.html","tf":0.09090909090909091},"customization/config.html":{"ref":"customization/config.html","tf":13.074074074074074},"customization/config.html#example":{"ref":"customization/config.html#example","tf":3},"customization/config.html#available-configuration":{"ref":"customization/config.html#available-configuration","tf":8.010989010989011},"customization/markdown.html":{"ref":"customization/markdown.html","tf":6.590909090909091},"customization/markdown.html#docpress.json":{"ref":"customization/markdown.html#docpress.json","tf":1.5},"customization/markdown.html#available-settings":{"ref":"customization/markdown.html#available-settings","tf":1.5},"customization/markdown.html#plugins":{"ref":"customization/markdown.html#plugins","tf":1.5},"customization/markdown.html#installing-markdown-plugins":{"ref":"customization/markdown.html#installing-markdown-plugins","tf":1.5},"customization/markdown.html#bundled-plugins":{"ref":"customization/markdown.html#bundled-plugins","tf":1.5}}}}}}},"v":{"docs":{},"e":{"docs":{},"r":{"docs":{},"t":{"docs":{"customization/markdown.html#available-settings":{"ref":"customization/markdown.html#available-settings","tf":0.03571428571428571}}}}}}},"m":{"docs":{},"m":{"docs":{},"a":{"docs":{},"n":{"docs":{},"d":{"docs":{"advanced/gh-pages.html#for-node.js-projects":{"ref":"advanced/gh-pages.html#for-node.js-projects","tf":0.017543859649122806},"getting-started/quickstart.html#local-installation":{"ref":"getting-started/quickstart.html#local-installation","tf":0.025}}}}},"i":{"docs":{},"t":{"docs":{"getting-started/quickstart.html#local-installation":{"ref":"getting-started/quickstart.html#local-installation","tf":0.025}}}}}},"d":{"docs":{},"e":{"docs":{"advanced/hacking.html":{"ref":"advanced/hacking.html","tf":0.07142857142857142},"customization/analytics.html#docpress.json":{"ref":"customization/analytics.html#docpress.json","tf":0.034482758620689655}}}},"r":{"docs":{},"e":{"docs":{"advanced/hacking.html#link-them-all":{"ref":"advanced/hacking.html#link-them-all","tf":0.038461538461538464},"advanced/hacking.html#use-the-links":{"ref":"advanced/hacking.html#use-the-links","tf":0.08571428571428572},"customization/config.html#available-configuration":{"ref":"customization/config.html#available-configuration","tf":0.01098901098901099},"customization/markdown.html#bundled-plugins":{"ref":"customization/markdown.html#bundled-plugins","tf":0.05263157894736842}},".":{"docs":{},"g":{"docs":{},"i":{"docs":{},"t":{"docs":{"advanced/hacking.html#clone-the-repos":{"ref":"advanced/hacking.html#clone-the-repos","tf":0.06666666666666667}}}}}}},"r":{"docs":{},"e":{"docs":{},"s":{"docs":{},"p":{"docs":{},"o":{"docs":{},"n":{"docs":{},"d":{"docs":{"customization/markdown.html#docpress.json":{"ref":"customization/markdown.html#docpress.json","tf":0.034482758620689655}}}}}}}}}},"p":{"docs":{},"i":{"docs":{"advanced/hacking.html#link-them-all":{"ref":"advanced/hacking.html#link-them-all","tf":0.038461538461538464},"advanced/hacking.html#use-the-links":{"ref":"advanced/hacking.html#use-the-links","tf":0.02857142857142857}}}}},"h":{"docs":{},"a":{"docs":{},"n":{"docs":{},"g":{"docs":{"index.html#usage":{"ref":"index.html#usage","tf":0.021739130434782608}}},"c":{"docs":{"getting-started/quickstart.html#writing-content":{"ref":"getting-started/quickstart.html#writing-content","tf":0.023255813953488372}}}},"p":{"docs":{},"t":{"docs":{},"e":{"docs":{},"r":{"docs":{"getting-started/more-pages.html#nesting":{"ref":"getting-started/more-pages.html#nesting","tf":0.05}}}}}}}},"r":{"docs":{},"u":{"docs":{},"z":{"docs":{"index.html#thanks":{"ref":"index.html#thanks","tf":0.09090909090909091}}}},"e":{"docs":{},"a":{"docs":{},"t":{"docs":{"customization/config.html":{"ref":"customization/config.html","tf":0.07407407407407407},"getting-started/more-pages.html":{"ref":"getting-started/more-pages.html","tf":0.043478260869565216},"getting-started/more-pages.html#create-your-toc":{"ref":"getting-started/more-pages.html#create-your-toc","tf":5.0625},"getting-started/more-pages.html#nesting":{"ref":"getting-started/more-pages.html#nesting","tf":0.05},"getting-started/more-pages.html#non-links":{"ref":"getting-started/more-pages.html#non-links","tf":0.045454545454545456},"getting-started/quickstart.html#writing-content":{"ref":"getting-started/quickstart.html#writing-content","tf":0.023255813953488372}}}}}},"a":{"docs":{},"l":{"docs":{},"l":{"docs":{"advanced/gh-pages.html#generate-a-github-token":{"ref":"advanced/gh-pages.html#generate-a-github-token","tf":0.041666666666666664},"customization/config.html":{"ref":"customization/config.html","tf":0.1111111111111111}}}},"s":{"docs":{},"e":{"docs":{"advanced/gh-pages.html#for-non-js-projects":{"ref":"advanced/gh-pages.html#for-non-js-projects","tf":0.07142857142857142}}}}},"i":{"docs":{"advanced/gh-pages.html#generate-a-github-token":{"ref":"advanced/gh-pages.html#generate-a-github-token","tf":0.041666666666666664},"advanced/gh-pages.html#for-node.js-projects":{"ref":"advanced/gh-pages.html#for-node.js-projects","tf":0.017543859649122806}},".":{"docs":{},"o":{"docs":{},"r":{"docs":{},"g":{"docs":{},"/":{"docs":{},"u":{"docs":{},"s":{"docs":{},"e":{"docs":{},"r":{"docs":{},"/":{"docs":{},"r":{"docs":{},"e":{"docs":{},"p":{"docs":{},"o":{"docs":{},"/":{"docs":{},"s":{"docs":{},"e":{"docs":{},"t":{"docs":{"advanced/gh-pages.html#adding-your-token":{"ref":"advanced/gh-pages.html#adding-your-token","tf":0.02702702702702703}}}}}}}}}}}}}}}}}}}}},"l":{"docs":{},"i":{"docs":{"advanced/gh-pages.html#adding-your-token":{"ref":"advanced/gh-pages.html#adding-your-token","tf":0.02702702702702703}}},"o":{"docs":{},"n":{"docs":{},"e":{"docs":{"advanced/hacking.html#clone-the-repos":{"ref":"advanced/hacking.html#clone-the-repos","tf":5.266666666666667}}}},"s":{"docs":{},"e":{"docs":{"customization/markdown.html#available-settings":{"ref":"customization/markdown.html#available-settings","tf":0.017857142857142856}}}}},"a":{"docs":{},"s":{"docs":{},"s":{"docs":{"customization/markdown.html#bundled-plugins":{"ref":"customization/markdown.html#bundled-plugins","tf":0.05263157894736842}}}}}},"d":{"docs":{"advanced/hacking.html#set-up-a-folder":{"ref":"advanced/hacking.html#set-up-a-folder","tf":0.07142857142857142},"advanced/hacking.html#link-them-all":{"ref":"advanced/hacking.html#link-them-all","tf":0.15384615384615385},"advanced/hacking.html#use-the-links":{"ref":"advanced/hacking.html#use-the-links","tf":0.08571428571428572}}},"s":{"docs":{},"s":{"docs":{"customization/config.html#available-configuration":{"ref":"customization/config.html#available-configuration","tf":0.03296703296703297},"customization/css.html":{"ref":"customization/css.html","tf":6.648148148148148},"customization/css.html#docpress.json":{"ref":"customization/css.html#docpress.json","tf":1.625},"customization/markdown.html#available-settings":{"ref":"customization/markdown.html#available-settings","tf":0.017857142857142856}}}},"u":{"docs":{},"s":{"docs":{},"t":{"docs":{},"o":{"docs":{},"m":{"docs":{"customization/config.html#available-configuration":{"ref":"customization/config.html#available-configuration","tf":0.01098901098901099},"customization/css.html":{"ref":"customization/css.html","tf":6.5},"customization/css.html#docpress.json":{"ref":"customization/css.html#docpress.json","tf":1.5},"customization/markdown.html":{"ref":"customization/markdown.html","tf":0.09090909090909091},"customization/markdown.html#plugins":{"ref":"customization/markdown.html#plugins","tf":0.05},"customization/markdown.html#bundled-plugins":{"ref":"customization/markdown.html#bundled-plugins","tf":0.05263157894736842}}}}}},"r":{"docs":{},"r":{"docs":{},"e":{"docs":{},"n":{"docs":{},"t":{"docs":{"getting-started/quickstart.html#local-installation":{"ref":"getting-started/quickstart.html#local-installation","tf":0.05}}}}}}}},"e":{"docs":{},"r":{"docs":{},"t":{"docs":{},"a":{"docs":{},"i":{"docs":{},"n":{"docs":{"getting-started/more-pages.html#nesting":{"ref":"getting-started/more-pages.html#nesting","tf":0.05}}}}}}}}},"e":{"docs":{"advanced/gh-pages.html#for-node.js-projects":{"ref":"advanced/gh-pages.html#for-node.js-projects","tf":0.017543859649122806}},"x":{"docs":{},"a":{"docs":{},"m":{"docs":{},"p":{"docs":{},"l":{"docs":{"index.html#table-of-contents":{"ref":"index.html#table-of-contents","tf":0.3333333333333333},"index.html#examples":{"ref":"index.html#examples","tf":10},"advanced/gh-pages.html#configuring-builds":{"ref":"advanced/gh-pages.html#configuring-builds","tf":0.047619047619047616},"customization/config.html#example":{"ref":"customization/config.html#example","tf":10.066666666666666},"customization/markdown.html#docpress.json":{"ref":"customization/markdown.html#docpress.json","tf":0.06896551724137931},"getting-started/more-pages.html#create-your-toc":{"ref":"getting-started/more-pages.html#create-your-toc","tf":0.0625},"getting-started/more-pages.html#relative-and-absolute-paths":{"ref":"getting-started/more-pages.html#relative-and-absolute-paths","tf":0.0625}}}}},"c":{"docs":{},"t":{"docs":{"advanced/gh-pages.html#for-node.js-projects":{"ref":"advanced/gh-pages.html#for-node.js-projects","tf":0.03508771929824561},"customization/markdown.html#installing-markdown-plugins":{"ref":"customization/markdown.html#installing-markdown-plugins","tf":0.05263157894736842},"getting-started/quickstart.html#local-installation":{"ref":"getting-started/quickstart.html#local-installation","tf":0.025}}}}},"i":{"docs":{},"t":{"docs":{"index.html#usage":{"ref":"index.html#usage","tf":0.021739130434782608}}}},"p":{"docs":{},"a":{"docs":{},"n":{"docs":{},"d":{"docs":{"advanced/hacking.html":{"ref":"advanced/hacking.html","tf":0.07142857142857142},"customization/css.html#docpress.json":{"ref":"customization/css.html#docpress.json","tf":0.125},"customization/plugins.html":{"ref":"customization/plugins.html","tf":0.2}}}}}},"t":{"docs":{},"e":{"docs":{},"r":{"docs":{},"n":{"docs":{"customization/css.html":{"ref":"customization/css.html","tf":0.037037037037037035}}}},"n":{"docs":{},"s":{"docs":{"getting-started/images-and-linking.html":{"ref":"getting-started/images-and-linking.html","tf":0.06666666666666667},"getting-started/quickstart.html#writing-content":{"ref":"getting-started/quickstart.html#writing-content","tf":0.023255813953488372}}}}},"r":{"docs":{},"a":{"docs":{"customization/css.html":{"ref":"customization/css.html","tf":0.037037037037037035}}}}}},"c":{"docs":{},"h":{"docs":{},"o":{"docs":{"index.html#usage":{"ref":"index.html#usage","tf":0.043478260869565216},"getting-started/quickstart.html#local-installation":{"ref":"getting-started/quickstart.html#local-installation","tf":0.025}}}}},"n":{"docs":{},"a":{"docs":{},"b":{"docs":{},"l":{"docs":{"advanced/gh-pages.html#adding-your-token":{"ref":"advanced/gh-pages.html#adding-your-token","tf":0.02702702702702703},"customization/analytics.html":{"ref":"customization/analytics.html","tf":0.09090909090909091},"customization/analytics.html#docpress.json":{"ref":"customization/analytics.html#docpress.json","tf":0.034482758620689655},"customization/markdown.html#available-settings":{"ref":"customization/markdown.html#available-settings","tf":0.017857142857142856},"customization/markdown.html#bundled-plugins":{"ref":"customization/markdown.html#bundled-plugins","tf":0.05263157894736842}}}}},"c":{"docs":{},"r":{"docs":{},"y":{"docs":{},"p":{"docs":{},"t":{"docs":{"advanced/gh-pages.html#adding-your-token":{"ref":"advanced/gh-pages.html#adding-your-token","tf":0.02702702702702703}}}}}}},"v":{"docs":{"advanced/gh-pages.html#for-node.js-projects":{"ref":"advanced/gh-pages.html#for-node.js-projects","tf":0.017543859649122806}},"i":{"docs":{},"r":{"docs":{},"o":{"docs":{},"n":{"docs":{"advanced/hacking.html":{"ref":"advanced/hacking.html","tf":0.07142857142857142},"advanced/hacking.html#dev-environment":{"ref":"advanced/hacking.html#dev-environment","tf":5}}}}}}},"d":{"docs":{"customization/css.html":{"ref":"customization/css.html","tf":0.037037037037037035}},"o":{"docs":{},"r":{"docs":{},"s":{"docs":{"customization/markdown.html#bundled-plugins":{"ref":"customization/markdown.html#bundled-plugins","tf":0.05263157894736842}}}}}}},"m":{"docs":{},"o":{"docs":{},"j":{"docs":{},"i":{"docs":{"customization/markdown.html#docpress.json":{"ref":"customization/markdown.html#docpress.json","tf":0.06896551724137931},"customization/markdown.html#installing-markdown-plugins":{"ref":"customization/markdown.html#installing-markdown-plugins","tf":0.05263157894736842}}}}}},"g":{"docs":{"getting-started/more-pages.html":{"ref":"getting-started/more-pages.html","tf":0.08695652173913043}}},"q":{"docs":{},"u":{"docs":{},"i":{"docs":{},"v":{"docs":{},"a":{"docs":{},"l":{"docs":{"getting-started/more-pages.html#relative-and-absolute-paths":{"ref":"getting-started/more-pages.html#relative-and-absolute-paths","tf":0.0625}}}}}}}},"a":{"docs":{},"s":{"docs":{},"i":{"docs":{"getting-started/quickstart.html#writing-content":{"ref":"getting-started/quickstart.html#writing-content","tf":0.046511627906976744}}}}}},"t":{"docs":{},"a":{"docs":{},"b":{"docs":{},"l":{"docs":{"index.html#table-of-contents":{"ref":"index.html#table-of-contents","tf":5},"getting-started/more-pages.html":{"ref":"getting-started/more-pages.html","tf":0.043478260869565216},"getting-started/more-pages.html#create-your-toc":{"ref":"getting-started/more-pages.html#create-your-toc","tf":0.125},"getting-started/quickstart.html#writing-content":{"ref":"getting-started/quickstart.html#writing-content","tf":0.023255813953488372}}}},"g":{"docs":{"customization/markdown.html#available-settings":{"ref":"customization/markdown.html#available-settings","tf":0.03571428571428571}}}},"h":{"docs":{},"a":{"docs":{},"n":{"docs":{},"k":{"docs":{"index.html#table-of-contents":{"ref":"index.html#table-of-contents","tf":0.3333333333333333},"index.html#thanks":{"ref":"index.html#thanks","tf":10}}}}},"r":{"docs":{},"o":{"docs":{},"u":{"docs":{},"g":{"docs":{},"h":{"docs":{"customization/markdown.html#plugins":{"ref":"customization/markdown.html#plugins","tf":0.05}}}}}}}},"w":{"docs":{},"i":{"docs":{},"t":{"docs":{},"t":{"docs":{},"e":{"docs":{},"r":{"docs":{"index.html#thanks":{"ref":"index.html#thanks","tf":0.045454545454545456}}}}}}}},"r":{"docs":{},"a":{"docs":{},"v":{"docs":{},"i":{"docs":{"advanced/gh-pages.html":{"ref":"advanced/gh-pages.html","tf":0.09090909090909091},"advanced/gh-pages.html#generate-a-github-token":{"ref":"advanced/gh-pages.html#generate-a-github-token","tf":0.08333333333333333},"advanced/gh-pages.html#adding-your-token":{"ref":"advanced/gh-pages.html#adding-your-token","tf":0.08108108108108109},"advanced/gh-pages.html#for-node.js-projects":{"ref":"advanced/gh-pages.html#for-node.js-projects","tf":0.017543859649122806}},"s":{"docs":{},"’":{"docs":{"advanced/gh-pages.html#adding-your-token":{"ref":"advanced/gh-pages.html#adding-your-token","tf":0.02702702702702703}}},".":{"docs":{},"y":{"docs":{},"m":{"docs":{},"l":{"docs":{"advanced/gh-pages.html#configuring-builds":{"ref":"advanced/gh-pages.html#configuring-builds","tf":0.047619047619047616},"advanced/gh-pages.html#.travis.yml":{"ref":"advanced/gh-pages.html#.travis.yml","tf":10},"advanced/gh-pages.html#for-node.js-projects":{"ref":"advanced/gh-pages.html#for-node.js-projects","tf":0.017543859649122806}}}}}},"_":{"docs":{},"b":{"docs":{},"r":{"docs":{},"a":{"docs":{},"n":{"docs":{},"c":{"docs":{},"h":{"docs":{"advanced/gh-pages.html#for-node.js-projects":{"ref":"advanced/gh-pages.html#for-node.js-projects","tf":0.017543859649122806}}}}}}}},"p":{"docs":{},"u":{"docs":{},"l":{"docs":{},"l":{"docs":{},"_":{"docs":{},"r":{"docs":{},"e":{"docs":{},"q":{"docs":{},"u":{"docs":{},"e":{"docs":{},"s":{"docs":{},"t":{"docs":{"advanced/gh-pages.html#for-node.js-projects":{"ref":"advanced/gh-pages.html#for-node.js-projects","tf":0.017543859649122806}}}}}}}}}}}}}}}}}},"c":{"docs":{},"k":{"docs":{"customization/analytics.html":{"ref":"customization/analytics.html","tf":0.09090909090909091},"customization/analytics.html#docpress.json":{"ref":"customization/analytics.html#docpress.json","tf":0.034482758620689655}}}}},"u":{"docs":{},"e":{"docs":{"customization/markdown.html#available-settings":{"ref":"customization/markdown.html#available-settings","tf":0.05357142857142857}}}}},"o":{"docs":{},"k":{"docs":{},"e":{"docs":{},"n":{"docs":{"advanced/gh-pages.html#generate-a-github-token":{"ref":"advanced/gh-pages.html#generate-a-github-token","tf":3.4166666666666665},"advanced/gh-pages.html#adding-your-token":{"ref":"advanced/gh-pages.html#adding-your-token","tf":5.054054054054054}}}}},"o":{"docs":{},"l":{"docs":{"advanced/gh-pages.html#adding-your-token":{"ref":"advanced/gh-pages.html#adding-your-token","tf":0.02702702702702703}}}},"c":{"docs":{"getting-started/images-and-linking.html":{"ref":"getting-started/images-and-linking.html","tf":0.06666666666666667},"getting-started/more-pages.html#create-your-toc":{"ref":"getting-started/more-pages.html#create-your-toc","tf":5},"getting-started/more-pages.html#setting-the-home-page":{"ref":"getting-started/more-pages.html#setting-the-home-page","tf":0.15384615384615385},"getting-started/more-pages.html#relative-and-absolute-paths":{"ref":"getting-started/more-pages.html#relative-and-absolute-paths","tf":0.0625}}}},"u":{"docs":{},"r":{"docs":{},"n":{"docs":{"advanced/gh-pages.html#adding-your-token":{"ref":"advanced/gh-pages.html#adding-your-token","tf":0.02702702702702703}}}}},"e":{"docs":{},"s":{"docs":{},"t":{"docs":{"advanced/gh-pages.html#configuring-builds":{"ref":"advanced/gh-pages.html#configuring-builds","tf":0.047619047619047616},"advanced/gh-pages.html#for-node.js-projects":{"ref":"advanced/gh-pages.html#for-node.js-projects","tf":0.017543859649122806}}}},"x":{"docs":{},"t":{"docs":{"getting-started/quickstart.html#writing-content":{"ref":"getting-started/quickstart.html#writing-content","tf":0.023255813953488372}}}}},"y":{"docs":{},"p":{"docs":{},"o":{"docs":{},"g":{"docs":{},"r":{"docs":{},"a":{"docs":{},"h":{"docs":{"customization/markdown.html#available-settings":{"ref":"customization/markdown.html#available-settings","tf":0.017857142857142856}}},"p":{"docs":{},"h":{"docs":{"customization/markdown.html#available-settings":{"ref":"customization/markdown.html#available-settings","tf":0.017857142857142856}}}}}}}}}},"b":{"docs":{},"d":{"docs":{"customization/plugins.html":{"ref":"customization/plugins.html","tf":0.2}}}},"i":{"docs":{},"t":{"docs":{},"l":{"docs":{"getting-started/more-pages.html#setting-the-home-page":{"ref":"getting-started/more-pages.html#setting-the-home-page","tf":0.15384615384615385}}}}}},"u":{"docs":{},"s":{"docs":{"advanced/gh-pages.html":{"ref":"advanced/gh-pages.html","tf":0.09090909090909091},"advanced/gh-pages.html#generate-a-github-token":{"ref":"advanced/gh-pages.html#generate-a-github-token","tf":0.125},"advanced/gh-pages.html#adding-your-token":{"ref":"advanced/gh-pages.html#adding-your-token","tf":0.02702702702702703},"advanced/hacking.html#link-them-all":{"ref":"advanced/hacking.html#link-them-all","tf":0.07692307692307693},"advanced/hacking.html#use-the-links":{"ref":"advanced/hacking.html#use-the-links","tf":5.0285714285714285},"customization/analytics.html#docpress.json":{"ref":"customization/analytics.html#docpress.json","tf":0.034482758620689655},"customization/config.html#available-configuration":{"ref":"customization/config.html#available-configuration","tf":0.01098901098901099},"customization/markdown.html#docpress.json":{"ref":"customization/markdown.html#docpress.json","tf":0.06896551724137931},"customization/markdown.html#available-settings":{"ref":"customization/markdown.html#available-settings","tf":0.05357142857142857},"customization/markdown.html#installing-markdown-plugins":{"ref":"customization/markdown.html#installing-markdown-plugins","tf":0.05263157894736842},"customization/markdown.html#bundled-plugins":{"ref":"customization/markdown.html#bundled-plugins","tf":0.05263157894736842},"customization/plugins.html":{"ref":"customization/plugins.html","tf":6.5},"getting-started/more-pages.html#setting-the-home-page":{"ref":"getting-started/more-pages.html#setting-the-home-page","tf":0.07692307692307693},"getting-started/quickstart.html#local-installation":{"ref":"getting-started/quickstart.html#local-installation","tf":0.025}},"a":{"docs":{},"g":{"docs":{"index.html#table-of-contents":{"ref":"index.html#table-of-contents","tf":0.3333333333333333},"index.html#usage":{"ref":"index.html#usage","tf":10}}}},"e":{"docs":{},"r":{"docs":{},"/":{"docs":{},"r":{"docs":{},"e":{"docs":{},"p":{"docs":{},"o":{"docs":{"advanced/gh-pages.html#configuring-builds":{"ref":"advanced/gh-pages.html#configuring-builds","tf":0.047619047619047616},"customization/config.html#available-configuration":{"ref":"customization/config.html#available-configuration","tf":0.01098901098901099}}}}}}}}},"u":{"docs":{},"a":{"docs":{},"l":{"docs":{"getting-started/quickstart.html#writing-content":{"ref":"getting-started/quickstart.html#writing-content","tf":0.023255813953488372}}}}}},"n":{"docs":{},"d":{"docs":{},"e":{"docs":{},"r":{"docs":{"index.html#what-is-it":{"ref":"index.html#what-is-it","tf":0.04},"index.html#usage":{"ref":"index.html#usage","tf":0.021739130434782608},"index.html#thanks":{"ref":"index.html#thanks","tf":0.045454545454545456},"customization/config.html#available-configuration":{"ref":"customization/config.html#available-configuration","tf":0.02197802197802198},"customization/markdown.html#plugins":{"ref":"customization/markdown.html#plugins","tf":0.05},"getting-started/more-pages.html#nesting":{"ref":"getting-started/more-pages.html#nesting","tf":0.05}}}}},"o":{"docs":{},"r":{"docs":{},"d":{"docs":{"getting-started/more-pages.html#create-your-toc":{"ref":"getting-started/more-pages.html#create-your-toc","tf":0.0625}}}}}},"p":{"docs":{"advanced/hacking.html":{"ref":"advanced/hacking.html","tf":0.07142857142857142},"advanced/hacking.html#set-up-a-folder":{"ref":"advanced/hacking.html#set-up-a-folder","tf":3.4047619047619047}},"d":{"docs":{},"a":{"docs":{},"t":{"docs":{"advanced/gh-pages.html":{"ref":"advanced/gh-pages.html","tf":0.18181818181818182},"advanced/gh-pages.html#generate-a-github-token":{"ref":"advanced/gh-pages.html#generate-a-github-token","tf":0.041666666666666664},"advanced/gh-pages.html#for-node.js-projects":{"ref":"advanced/gh-pages.html#for-node.js-projects","tf":0.05263157894736842}}}}}},"a":{"docs":{"customization/analytics.html#docpress.json":{"ref":"customization/analytics.html#docpress.json","tf":0.034482758620689655}}},"r":{"docs":{},"l":{"docs":{"customization/markdown.html#available-settings":{"ref":"customization/markdown.html#available-settings","tf":0.017857142857142856}}}}},"a":{"docs":{},"p":{"docs":{},"p":{"docs":{},"e":{"docs":{},"a":{"docs":{},"r":{"docs":{"index.html#what-is-it":{"ref":"index.html#what-is-it","tf":0.04}}}}}}},"u":{"docs":{},"t":{"docs":{},"h":{"docs":{},"o":{"docs":{},"r":{"docs":{"index.html#thanks":{"ref":"index.html#thanks","tf":0.045454545454545456}}}}},"o":{"docs":{"customization/markdown.html#available-settings":{"ref":"customization/markdown.html#available-settings","tf":0.017857142857142856}},"m":{"docs":{"advanced/gh-pages.html":{"ref":"advanced/gh-pages.html","tf":4.333333333333333},"advanced/gh-pages.html#generate-a-github-token":{"ref":"advanced/gh-pages.html#generate-a-github-token","tf":1},"advanced/gh-pages.html#adding-your-token":{"ref":"advanced/gh-pages.html#adding-your-token","tf":1},"advanced/gh-pages.html#configuring-builds":{"ref":"advanced/gh-pages.html#configuring-builds","tf":1},"advanced/gh-pages.html#.travis.yml":{"ref":"advanced/gh-pages.html#.travis.yml","tf":1},"advanced/gh-pages.html#for-node.js-projects":{"ref":"advanced/gh-pages.html#for-node.js-projects","tf":1},"advanced/gh-pages.html#for-non-js-projects":{"ref":"advanced/gh-pages.html#for-non-js-projects","tf":1}},"a":{"docs":{},"t":{"docs":{"advanced/gh-pages.html":{"ref":"advanced/gh-pages.html","tf":0.09090909090909091}}}}}}}},"d":{"docs":{"advanced/gh-pages.html#adding-your-token":{"ref":"advanced/gh-pages.html#adding-your-token","tf":5},"advanced/gh-pages.html#for-node.js-projects":{"ref":"advanced/gh-pages.html#for-node.js-projects","tf":0.017543859649122806},"customization/analytics.html":{"ref":"customization/analytics.html","tf":0.09090909090909091}},"d":{"docs":{"advanced/gh-pages.html#adding-your-token":{"ref":"advanced/gh-pages.html#adding-your-token","tf":0.08108108108108109},"advanced/gh-pages.html#configuring-builds":{"ref":"advanced/gh-pages.html#configuring-builds","tf":0.047619047619047616},"customization/config.html#available-configuration":{"ref":"customization/config.html#available-configuration","tf":0.01098901098901099},"getting-started/more-pages.html#relative-and-absolute-paths":{"ref":"getting-started/more-pages.html#relative-and-absolute-paths","tf":0.0625},"getting-started/quickstart.html#writing-content":{"ref":"getting-started/quickstart.html#writing-content","tf":0.023255813953488372}}}},"l":{"docs":{},"r":{"docs":{},"e":{"docs":{},"a":{"docs":{},"d":{"docs":{},"i":{"docs":{"advanced/gh-pages.html#adding-your-token":{"ref":"advanced/gh-pages.html#adding-your-token","tf":0.02702702702702703},"customization/markdown.html#bundled-plugins":{"ref":"customization/markdown.html#bundled-plugins","tf":0.05263157894736842},"getting-started/quickstart.html#writing-content":{"ref":"getting-started/quickstart.html#writing-content","tf":0.023255813953488372}}}}}}},"t":{"docs":{},"e":{"docs":{},"r":{"docs":{},"n":{"docs":{"advanced/gh-pages.html#adding-your-token":{"ref":"advanced/gh-pages.html#adding-your-token","tf":0.02702702702702703}},"a":{"docs":{},"t":{"docs":{},"i":{"docs":{"customization/config.html":{"ref":"customization/config.html","tf":0.037037037037037035}}}}}}}}},"l":{"docs":{},"o":{"docs":{},"w":{"docs":{"customization/markdown.html#plugins":{"ref":"customization/markdown.html#plugins","tf":0.05}}}}},"w":{"docs":{},"a":{"docs":{},"y":{"docs":{"getting-started/more-pages.html#setting-the-home-page":{"ref":"getting-started/more-pages.html#setting-the-home-page","tf":0.07692307692307693}}}}}},"f":{"docs":{},"t":{"docs":{},"e":{"docs":{},"r":{"docs":{},"_":{"docs":{},"s":{"docs":{},"u":{"docs":{},"c":{"docs":{},"c":{"docs":{},"e":{"docs":{},"s":{"docs":{},"s":{"docs":{"advanced/gh-pages.html#for-node.js-projects":{"ref":"advanced/gh-pages.html#for-node.js-projects","tf":0.017543859649122806}}}}}}}}}}}}}},"b":{"docs":{},"o":{"docs":{},"v":{"docs":{"advanced/gh-pages.html#for-non-js-projects":{"ref":"advanced/gh-pages.html#for-non-js-projects","tf":0.07142857142857142}}}},"s":{"docs":{},"o":{"docs":{},"l":{"docs":{},"u":{"docs":{},"t":{"docs":{"getting-started/more-pages.html#relative-and-absolute-paths":{"ref":"getting-started/more-pages.html#relative-and-absolute-paths","tf":3.395833333333333}}}}}}}},"r":{"docs":{},"t":{"docs":{},"i":{"docs":{},"c":{"docs":{},"l":{"docs":{"advanced/hacking.html":{"ref":"advanced/hacking.html","tf":0.07142857142857142},"customization/css.html#docpress.json":{"ref":"customization/css.html#docpress.json","tf":0.125},"customization/plugins.html":{"ref":"customization/plugins.html","tf":0.2}}}}}}},"n":{"docs":{},"a":{"docs":{},"l":{"docs":{},"y":{"docs":{},"t":{"docs":{"customization/analytics.html":{"ref":"customization/analytics.html","tf":6.590909090909091},"customization/analytics.html#docpress.json":{"ref":"customization/analytics.html#docpress.json","tf":1.5689655172413792},"customization/config.html#available-configuration":{"ref":"customization/config.html#available-configuration","tf":0.03296703296703297}}}}}}},"v":{"docs":{},"a":{"docs":{},"i":{"docs":{},"l":{"docs":{"customization/config.html#available-configuration":{"ref":"customization/config.html#available-configuration","tf":5.021978021978022},"customization/markdown.html#available-settings":{"ref":"customization/markdown.html#available-settings","tf":5},"customization/markdown.html#plugins":{"ref":"customization/markdown.html#plugins","tf":0.05},"getting-started/quickstart.html":{"ref":"getting-started/quickstart.html","tf":0.08333333333333333}}}}}}},"b":{"docs":{},"a":{"docs":{},"s":{"docs":{},"i":{"docs":{},"c":{"docs":{"index.html#what-is-it":{"ref":"index.html#what-is-it","tf":0.04},"getting-started/quickstart.html#writing-content":{"ref":"getting-started/quickstart.html#writing-content","tf":0.023255813953488372},"getting-started/quickstart.html#previewing-your-site":{"ref":"getting-started/quickstart.html#previewing-your-site","tf":0.03225806451612903}}}},"e":{"docs":{"advanced/hacking.html#link-them-all":{"ref":"advanced/hacking.html#link-them-all","tf":0.038461538461538464},"advanced/hacking.html#use-the-links":{"ref":"advanced/hacking.html#use-the-links","tf":0.05714285714285714}},".":{"docs":{},"g":{"docs":{},"i":{"docs":{},"t":{"docs":{"advanced/hacking.html#clone-the-repos":{"ref":"advanced/hacking.html#clone-the-repos","tf":0.06666666666666667}}}}}}}}},"u":{"docs":{},"i":{"docs":{},"l":{"docs":{},"d":{"docs":{"index.html#usage":{"ref":"index.html#usage","tf":0.043478260869565216},"advanced/gh-pages.html#adding-your-token":{"ref":"advanced/gh-pages.html#adding-your-token","tf":0.02702702702702703},"advanced/gh-pages.html#configuring-builds":{"ref":"advanced/gh-pages.html#configuring-builds","tf":5.0476190476190474},"advanced/gh-pages.html#for-node.js-projects":{"ref":"advanced/gh-pages.html#for-node.js-projects","tf":0.017543859649122806},"customization/config.html#available-configuration":{"ref":"customization/config.html#available-configuration","tf":0.01098901098901099},"getting-started/quickstart.html#local-installation":{"ref":"getting-started/quickstart.html#local-installation","tf":0.025},"getting-started/quickstart.html#previewing-your-site":{"ref":"getting-started/quickstart.html#previewing-your-site","tf":0.03225806451612903}}}}},"n":{"docs":{},"d":{"docs":{},"l":{"docs":{"customization/markdown.html#bundled-plugins":{"ref":"customization/markdown.html#bundled-plugins","tf":5.052631578947368}}}}}},"r":{"docs":{"customization/markdown.html#available-settings":{"ref":"customization/markdown.html#available-settings","tf":0.017857142857142856}},"a":{"docs":{},"n":{"docs":{},"c":{"docs":{},"h":{"docs":{"advanced/gh-pages.html":{"ref":"advanced/gh-pages.html","tf":0.09090909090909091}}}}}},"e":{"docs":{},"a":{"docs":{},"k":{"docs":{"customization/markdown.html#available-settings":{"ref":"customization/markdown.html#available-settings","tf":0.03571428571428571}}}}},"o":{"docs":{},"w":{"docs":{},"s":{"docs":{},"e":{"docs":{},"r":{"docs":{"getting-started/quickstart.html#previewing-your-site":{"ref":"getting-started/quickstart.html#previewing-your-site","tf":0.03225806451612903}}}}}}}},"e":{"docs":{"customization/analytics.html#docpress.json":{"ref":"customization/analytics.html#docpress.json","tf":0.034482758620689655}},"h":{"docs":{},"a":{"docs":{},"l":{"docs":{},"f":{"docs":{"advanced/gh-pages.html#generate-a-github-token":{"ref":"advanced/gh-pages.html#generate-a-github-token","tf":0.041666666666666664}}}},"v":{"docs":{},"i":{"docs":{},"o":{"docs":{},"r":{"docs":{"customization/markdown.html#plugins":{"ref":"customization/markdown.html#plugins","tf":0.05}}}}}}}},"f":{"docs":{},"o":{"docs":{},"r":{"docs":{},"e":{"docs":{},"_":{"docs":{},"i":{"docs":{},"n":{"docs":{},"s":{"docs":{},"t":{"docs":{},"a":{"docs":{},"l":{"docs":{"advanced/gh-pages.html#.travis.yml":{"ref":"advanced/gh-pages.html#.travis.yml","tf":0.125},"advanced/gh-pages.html#for-non-js-projects":{"ref":"advanced/gh-pages.html#for-non-js-projects","tf":0.07142857142857142}}}}}}}}}}}}}},"l":{"docs":{},"o":{"docs":{},"c":{"docs":{},"k":{"docs":{"customization/markdown.html#available-settings":{"ref":"customization/markdown.html#available-settings","tf":0.017857142857142856}}}}}},"o":{"docs":{},"t":{"docs":{},"h":{"docs":{"getting-started/more-pages.html#relative-and-absolute-paths":{"ref":"getting-started/more-pages.html#relative-and-absolute-paths","tf":0.0625}}}}}},"h":{"docs":{},"e":{"docs":{},"a":{"docs":{},"v":{"docs":{},"i":{"docs":{"index.html#what-is-it":{"ref":"index.html#what-is-it","tf":0.04},"index.html#usage":{"ref":"index.html#usage","tf":0.021739130434782608}}}},"d":{"docs":{"getting-started/more-pages.html#non-links":{"ref":"getting-started/more-pages.html#non-links","tf":0.045454545454545456}}}},"r":{"docs":{},"e":{"docs":{"index.html#what-is-it":{"ref":"index.html#what-is-it","tf":0.04},"advanced/gh-pages.html#adding-your-token":{"ref":"advanced/gh-pages.html#adding-your-token","tf":0.02702702702702703}},"’":{"docs":{"advanced/hacking.html":{"ref":"advanced/hacking.html","tf":0.07142857142857142},"customization/config.html#example":{"ref":"customization/config.html#example","tf":0.06666666666666667},"getting-started/more-pages.html#create-your-toc":{"ref":"getting-started/more-pages.html#create-your-toc","tf":0.0625}}}}},"l":{"docs":{},"p":{"docs":{"index.html#thanks":{"ref":"index.html#thanks","tf":0.045454545454545456},"advanced/hacking.html":{"ref":"advanced/hacking.html","tf":0.07142857142857142},"customization/css.html#docpress.json":{"ref":"customization/css.html#docpress.json","tf":0.125},"customization/plugins.html":{"ref":"customization/plugins.html","tf":0.2}}}}},"t":{"docs":{},"t":{"docs":{},"p":{"docs":{},":":{"docs":{},"/":{"docs":{},"/":{"docs":{},"r":{"docs":{},"i":{"docs":{},"c":{"docs":{},"o":{"docs":{},"s":{"docs":{},"t":{"docs":{},"a":{"docs":{},"c":{"docs":{},"r":{"docs":{},"u":{"docs":{},"z":{"docs":{},".":{"docs":{},"c":{"docs":{},"o":{"docs":{},"m":{"docs":{},"/":{"docs":{},"d":{"docs":{},"o":{"docs":{},"m":{"1":{"0":{"1":{"docs":{"index.html#examples":{"ref":"index.html#examples","tf":0.16666666666666666}}},"docs":{}},"docs":{}},"docs":{}}}},"o":{"docs":{},"n":{"docs":{},"m":{"docs":{},"o":{"docs":{},"u":{"docs":{},"n":{"docs":{},"t":{"docs":{"index.html#examples":{"ref":"index.html#examples","tf":0.16666666666666666}}}}}}}}}}}}}}}}}}}}}}}}},"l":{"docs":{},"o":{"docs":{},"c":{"docs":{},"a":{"docs":{},"l":{"docs":{},"h":{"docs":{},"o":{"docs":{},"s":{"docs":{},"t":{"docs":{},":":{"3":{"0":{"0":{"0":{"docs":{"index.html#usage":{"ref":"index.html#usage","tf":0.021739130434782608},"getting-started/quickstart.html#previewing-your-site":{"ref":"getting-started/quickstart.html#previewing-your-site","tf":0.03225806451612903}}},"docs":{}},"docs":{}},"docs":{}},"docs":{}}}}}}}}}}},"g":{"docs":{},"i":{"docs":{},"t":{"docs":{},"h":{"docs":{},"u":{"docs":{},"b":{"docs":{},".":{"docs":{},"c":{"docs":{},"o":{"docs":{},"m":{"docs":{},"/":{"docs":{},"d":{"docs":{},"o":{"docs":{},"c":{"docs":{},"p":{"docs":{},"r":{"docs":{},"e":{"docs":{},"s":{"docs":{},"s":{"docs":{},"/":{"docs":{},"d":{"docs":{},"o":{"docs":{},"c":{"docs":{},"p":{"docs":{},"r":{"docs":{},"e":{"docs":{},"s":{"docs":{},"s":{"docs":{"advanced/hacking.html#clone-the-repos":{"ref":"advanced/hacking.html#clone-the-repos","tf":0.2}},".":{"docs":{},"g":{"docs":{},"i":{"docs":{},"t":{"docs":{"advanced/hacking.html#clone-the-repos":{"ref":"advanced/hacking.html#clone-the-repos","tf":0.06666666666666667}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}},"s":{"docs":{},"i":{"docs":{},"t":{"docs":{},"e":{"docs":{},".":{"docs":{},"c":{"docs":{},"o":{"docs":{},"m":{"docs":{},"/":{"docs":{},"e":{"docs":{},"x":{"docs":{},"t":{"docs":{},"e":{"docs":{},"r":{"docs":{},"n":{"docs":{},"a":{"docs":{},"l":{"docs":{},".":{"docs":{},"c":{"docs":{},"s":{"docs":{},"s":{"docs":{"customization/css.html#docpress.json":{"ref":"customization/css.html#docpress.json","tf":0.125}}}}}}}}}}}}}}}}}}}}}}}}}},"s":{"docs":{},":":{"docs":{},"/":{"docs":{},"/":{"docs":{},"t":{"docs":{},"r":{"docs":{},"a":{"docs":{},"v":{"docs":{},"i":{"docs":{"advanced/gh-pages.html#adding-your-token":{"ref":"advanced/gh-pages.html#adding-your-token","tf":0.02702702702702703}}}}}}}}}}}}},"m":{"docs":{},"l":{"docs":{"customization/markdown.html":{"ref":"customization/markdown.html","tf":0.09090909090909091},"customization/markdown.html#available-settings":{"ref":"customization/markdown.html#available-settings","tf":0.03571428571428571}}}}},"a":{"docs":{},"p":{"docs":{},"p":{"docs":{},"e":{"docs":{},"n":{"docs":{"advanced/gh-pages.html#configuring-builds":{"ref":"advanced/gh-pages.html#configuring-builds","tf":0.047619047619047616}}}}}},"c":{"docs":{},"k":{"docs":{"advanced/hacking.html":{"ref":"advanced/hacking.html","tf":6.5},"advanced/hacking.html#dev-environment":{"ref":"advanced/hacking.html#dev-environment","tf":1.5},"advanced/hacking.html#set-up-a-folder":{"ref":"advanced/hacking.html#set-up-a-folder","tf":1.5},"advanced/hacking.html#clone-the-repos":{"ref":"advanced/hacking.html#clone-the-repos","tf":1.5},"advanced/hacking.html#link-them-all":{"ref":"advanced/hacking.html#link-them-all","tf":1.5},"advanced/hacking.html#use-the-links":{"ref":"advanced/hacking.html#use-the-links","tf":1.5}}}}},"o":{"docs":{},"s":{"docs":{},"t":{"docs":{"customization/css.html":{"ref":"customization/css.html","tf":0.037037037037037035}}}},"m":{"docs":{},"e":{"docs":{"getting-started/more-pages.html#setting-the-home-page":{"ref":"getting-started/more-pages.html#setting-the-home-page","tf":3.41025641025641}}}}},"i":{"docs":{},"g":{"docs":{},"h":{"docs":{},"l":{"docs":{},"i":{"docs":{},"g":{"docs":{},"h":{"docs":{},"t":{"docs":{"customization/markdown.html#available-settings":{"ref":"customization/markdown.html#available-settings","tf":0.03571428571428571}},".":{"docs":{},"j":{"docs":{"customization/markdown.html#available-settings":{"ref":"customization/markdown.html#available-settings","tf":0.017857142857142856}}}}}}}}},"e":{"docs":{},"r":{"docs":{"getting-started/quickstart.html":{"ref":"getting-started/quickstart.html","tf":0.08333333333333333}}}}}}}},"i":{"docs":{},"n":{"docs":{},"s":{"docs":{},"t":{"docs":{},"r":{"docs":{},"u":{"docs":{},"c":{"docs":{},"t":{"docs":{"index.html#what-is-it":{"ref":"index.html#what-is-it","tf":0.04}}}}}},"a":{"docs":{},"l":{"docs":{"index.html#usage":{"ref":"index.html#usage","tf":0.021739130434782608},"advanced/gh-pages.html#configuring-builds":{"ref":"advanced/gh-pages.html#configuring-builds","tf":0.047619047619047616},"advanced/gh-pages.html#.travis.yml":{"ref":"advanced/gh-pages.html#.travis.yml","tf":0.125},"advanced/gh-pages.html#for-node.js-projects":{"ref":"advanced/gh-pages.html#for-node.js-projects","tf":0.03508771929824561},"customization/markdown.html#installing-markdown-plugins":{"ref":"customization/markdown.html#installing-markdown-plugins","tf":3.4385964912280698},"customization/markdown.html#bundled-plugins":{"ref":"customization/markdown.html#bundled-plugins","tf":0.05263157894736842},"getting-started/more-pages.html#non-links":{"ref":"getting-started/more-pages.html#non-links","tf":0.045454545454545456},"getting-started/quickstart.html":{"ref":"getting-started/quickstart.html","tf":0.08333333333333333},"getting-started/quickstart.html#local-installation":{"ref":"getting-started/quickstart.html#local-installation","tf":5.075}},"l":{"docs":{},"a":{"docs":{},"t":{"docs":{},"i":{"docs":{},"o":{"docs":{},"n":{"docs":{},"]":{"docs":{},"(":{"docs":{},"i":{"docs":{},"n":{"docs":{},"s":{"docs":{},"t":{"docs":{},"a":{"docs":{},"l":{"docs":{},"l":{"docs":{},".":{"docs":{},"m":{"docs":{},"d":{"docs":{"getting-started/images-and-linking.html":{"ref":"getting-started/images-and-linking.html","tf":0.06666666666666667}}}}},"a":{"docs":{},"t":{"docs":{},"i":{"docs":{},"o":{"docs":{},"n":{"docs":{},"/":{"docs":{},"r":{"docs":{},"e":{"docs":{},"a":{"docs":{},"d":{"docs":{},"m":{"docs":{},"e":{"docs":{},".":{"docs":{},"m":{"docs":{},"d":{"docs":{"getting-started/more-pages.html#docsreadme.md":{"ref":"getting-started/more-pages.html#docsreadme.md","tf":0.09090909090909091}}}}}}}}}}}}}}}}}}}}}},"t":{"docs":{},"r":{"docs":{},"o":{"docs":{},"/":{"docs":{},"i":{"docs":{},"n":{"docs":{},"s":{"docs":{},"t":{"docs":{},"a":{"docs":{},"l":{"docs":{},"l":{"docs":{},".":{"docs":{},"m":{"docs":{},"d":{"docs":{"getting-started/more-pages.html#docsreadme.md":{"ref":"getting-started/more-pages.html#docsreadme.md","tf":0.09090909090909091},"getting-started/more-pages.html#non-links":{"ref":"getting-started/more-pages.html#non-links","tf":0.045454545454545456}}}}}}}}}}}}}}}}}}}}}}}}}}},"n":{"docs":{},"c":{"docs":{"customization/markdown.html#docpress.json":{"ref":"customization/markdown.html#docpress.json","tf":0.034482758620689655}}}}}},"i":{"docs":{},"d":{"docs":{"customization/config.html":{"ref":"customization/config.html","tf":0.037037037037037035},"customization/css.html":{"ref":"customization/css.html","tf":0.07407407407407407},"customization/markdown.html":{"ref":"customization/markdown.html","tf":0.09090909090909091},"getting-started/more-pages.html":{"ref":"getting-started/more-pages.html","tf":0.043478260869565216}}}}},"v":{"docs":{},"o":{"docs":{},"k":{"docs":{"advanced/gh-pages.html#for-non-js-projects":{"ref":"advanced/gh-pages.html#for-non-js-projects","tf":0.07142857142857142}}}}},"i":{"docs":{},"t":{"docs":{"customization/markdown.html#installing-markdown-plugins":{"ref":"customization/markdown.html#installing-markdown-plugins","tf":0.05263157894736842},"getting-started/quickstart.html#local-installation":{"ref":"getting-started/quickstart.html#local-installation","tf":0.025}}}},"t":{"docs":{},"r":{"docs":{},"o":{"docs":{},"d":{"docs":{},"u":{"docs":{},"c":{"docs":{},"t":{"docs":{"getting-started/more-pages.html#non-links":{"ref":"getting-started/more-pages.html#non-links","tf":0.045454545454545456}},"i":{"docs":{},"o":{"docs":{},"n":{"docs":{},"]":{"docs":{},"(":{"docs":{},"i":{"docs":{},"n":{"docs":{},"t":{"docs":{},"r":{"docs":{},"o":{"docs":{},"/":{"docs":{},"r":{"docs":{},"e":{"docs":{},"a":{"docs":{},"d":{"docs":{},"m":{"docs":{},"e":{"docs":{},".":{"docs":{},"m":{"docs":{},"d":{"docs":{"getting-started/more-pages.html#docsreadme.md":{"ref":"getting-started/more-pages.html#docsreadme.md","tf":0.09090909090909091}}}}}}}}}}}}}}}}}}}}}}}}}}}}},"d":{"docs":{},"e":{"docs":{},"n":{"docs":{},"t":{"docs":{"getting-started/more-pages.html#nesting":{"ref":"getting-started/more-pages.html#nesting","tf":0.05}}}}}}},"t":{"docs":{},"’":{"docs":{"customization/config.html#available-configuration":{"ref":"customization/config.html#available-configuration","tf":0.02197802197802198},"getting-started/more-pages.html#nesting":{"ref":"getting-started/more-pages.html#nesting","tf":0.05}},"d":{"docs":{"advanced/hacking.html#set-up-a-folder":{"ref":"advanced/hacking.html#set-up-a-folder","tf":0.07142857142857142}}}},"e":{"docs":{},"m":{"docs":{"getting-started/more-pages.html#nesting":{"ref":"getting-started/more-pages.html#nesting","tf":0.05},"getting-started/more-pages.html#non-links":{"ref":"getting-started/more-pages.html#non-links","tf":0.045454545454545456}}}}},"d":{"docs":{"customization/analytics.html#docpress.json":{"ref":"customization/analytics.html#docpress.json","tf":0.10344827586206896},"customization/config.html#available-configuration":{"ref":"customization/config.html#available-configuration","tf":0.01098901098901099}}},"m":{"docs":{},"a":{"docs":{},"g":{"docs":{"getting-started/images-and-linking.html":{"ref":"getting-started/images-and-linking.html","tf":6.5},"getting-started/more-pages.html#relative-and-absolute-paths":{"ref":"getting-started/more-pages.html#relative-and-absolute-paths","tf":0.0625}}}}}},"n":{"docs":{},"o":{"docs":{},"w":{"docs":{"index.html#what-is-it":{"ref":"index.html#what-is-it","tf":0.04},"getting-started/quickstart.html#previewing-your-site":{"ref":"getting-started/quickstart.html#previewing-your-site","tf":0.03225806451612903}}},"d":{"docs":{},"e":{"docs":{},"_":{"docs":{},"j":{"docs":{"advanced/gh-pages.html#.travis.yml":{"ref":"advanced/gh-pages.html#.travis.yml","tf":0.25},"advanced/gh-pages.html#for-node.js-projects":{"ref":"advanced/gh-pages.html#for-node.js-projects","tf":0.017543859649122806},"advanced/gh-pages.html#for-non-js-projects":{"ref":"advanced/gh-pages.html#for-non-js-projects","tf":0.14285714285714285}}},"m":{"docs":{},"o":{"docs":{},"d":{"docs":{},"u":{"docs":{},"l":{"docs":{},"e":{"docs":{},"s":{"docs":{},"/":{"docs":{},".":{"docs":{},"b":{"docs":{},"i":{"docs":{},"n":{"docs":{},"/":{"docs":{},"d":{"docs":{},"o":{"docs":{},"c":{"docs":{},"p":{"docs":{},"r":{"docs":{},"e":{"docs":{},"s":{"docs":{},"s":{"docs":{"advanced/gh-pages.html#for-node.js-projects":{"ref":"advanced/gh-pages.html#for-node.js-projects","tf":0.017543859649122806}}}}}}}}}},"g":{"docs":{},"i":{"docs":{},"t":{"docs":{"advanced/gh-pages.html#for-node.js-projects":{"ref":"advanced/gh-pages.html#for-node.js-projects","tf":0.017543859649122806}}}}}}}}}}}}}}}}}}},".":{"docs":{},"j":{"docs":{"advanced/gh-pages.html#for-node.js-projects":{"ref":"advanced/gh-pages.html#for-node.js-projects","tf":5.017543859649122},"getting-started/quickstart.html":{"ref":"getting-started/quickstart.html","tf":0.08333333333333333}}}}}},"b":{"docs":{},"o":{"docs":{},"d":{"docs":{},"y":{"docs":{},"@":{"docs":{},"n":{"docs":{},"o":{"docs":{},"b":{"docs":{},"o":{"docs":{},"d":{"docs":{},"y":{"docs":{},".":{"docs":{},"o":{"docs":{},"r":{"docs":{},"g":{"docs":{"advanced/gh-pages.html#for-node.js-projects":{"ref":"advanced/gh-pages.html#for-node.js-projects","tf":0.017543859649122806}}}}}}}}}}}}}}}}},"n":{"docs":{"advanced/gh-pages.html#for-non-js-projects":{"ref":"advanced/gh-pages.html#for-non-js-projects","tf":3.333333333333333},"getting-started/more-pages.html#non-links":{"ref":"getting-started/more-pages.html#non-links","tf":5}},"e":{"docs":{"customization/config.html#available-configuration":{"ref":"customization/config.html#available-configuration","tf":0.054945054945054944}}}}},"p":{"docs":{},"m":{"docs":{"index.html#usage":{"ref":"index.html#usage","tf":0.021739130434782608},"advanced/gh-pages.html#for-node.js-projects":{"ref":"advanced/gh-pages.html#for-node.js-projects","tf":0.03508771929824561},"advanced/hacking.html#link-them-all":{"ref":"advanced/hacking.html#link-them-all","tf":0.19230769230769232},"advanced/hacking.html#use-the-links":{"ref":"advanced/hacking.html#use-the-links","tf":0.2571428571428571},"customization/markdown.html#docpress.json":{"ref":"customization/markdown.html#docpress.json","tf":0.034482758620689655},"customization/markdown.html#plugins":{"ref":"customization/markdown.html#plugins","tf":0.1},"customization/markdown.html#installing-markdown-plugins":{"ref":"customization/markdown.html#installing-markdown-plugins","tf":0.15789473684210525},"customization/markdown.html#bundled-plugins":{"ref":"customization/markdown.html#bundled-plugins","tf":0.05263157894736842},"getting-started/quickstart.html":{"ref":"getting-started/quickstart.html","tf":0.16666666666666666},"getting-started/quickstart.html#local-installation":{"ref":"getting-started/quickstart.html#local-installation","tf":0.05}}}},"a":{"docs":{},"m":{"docs":{},"e":{"docs":{"advanced/gh-pages.html#generate-a-github-token":{"ref":"advanced/gh-pages.html#generate-a-github-token","tf":0.041666666666666664},"customization/config.html#example":{"ref":"customization/config.html#example","tf":0.06666666666666667},"customization/markdown.html#docpress.json":{"ref":"customization/markdown.html#docpress.json","tf":0.034482758620689655},"customization/markdown.html#bundled-plugins":{"ref":"customization/markdown.html#bundled-plugins","tf":0.05263157894736842}}}}},"e":{"docs":{},"e":{"docs":{},"d":{"docs":{"advanced/gh-pages.html#generate-a-github-token":{"ref":"advanced/gh-pages.html#generate-a-github-token","tf":0.041666666666666664},"customization/css.html":{"ref":"customization/css.html","tf":0.037037037037037035},"getting-started/images-and-linking.html":{"ref":"getting-started/images-and-linking.html","tf":0.13333333333333333},"getting-started/more-pages.html#non-links":{"ref":"getting-started/more-pages.html#non-links","tf":0.045454545454545456}}}},"x":{"docs":{},"t":{"docs":{"advanced/gh-pages.html#configuring-builds":{"ref":"advanced/gh-pages.html#configuring-builds","tf":0.047619047619047616}}}},"w":{"docs":{"customization/config.html":{"ref":"customization/config.html","tf":0.037037037037037035},"customization/markdown.html#available-settings":{"ref":"customization/markdown.html#available-settings","tf":0.017857142857142856}}},"s":{"docs":{},"t":{"docs":{"getting-started/more-pages.html#nesting":{"ref":"getting-started/more-pages.html#nesting","tf":10.1}}}}},"v":{"docs":{},"m":{"docs":{"advanced/gh-pages.html#.travis.yml":{"ref":"advanced/gh-pages.html#.travis.yml","tf":0.125},"advanced/gh-pages.html#for-non-js-projects":{"ref":"advanced/gh-pages.html#for-non-js-projects","tf":0.07142857142857142}}}},"i":{"docs":{},"c":{"docs":{},"e":{"docs":{"advanced/hacking.html#set-up-a-folder":{"ref":"advanced/hacking.html#set-up-a-folder","tf":0.07142857142857142}}}}}},"r":{"docs":{},"e":{"docs":{},"a":{"docs":{},"d":{"docs":{"getting-started/images-and-linking.html":{"ref":"getting-started/images-and-linking.html","tf":0.06666666666666667},"getting-started/quickstart.html#writing-content":{"ref":"getting-started/quickstart.html#writing-content","tf":0.023255813953488372}},"m":{"docs":{"index.html#examples":{"ref":"index.html#examples","tf":0.16666666666666666},"getting-started/more-pages.html#create-your-toc":{"ref":"getting-started/more-pages.html#create-your-toc","tf":0.0625}},"e":{"docs":{},".":{"docs":{},"m":{"docs":{},"d":{"docs":{"index.html#what-is-it":{"ref":"index.html#what-is-it","tf":0.04},"index.html#usage":{"ref":"index.html#usage","tf":0.043478260869565216},"getting-started/more-pages.html":{"ref":"getting-started/more-pages.html","tf":0.043478260869565216},"getting-started/quickstart.html#writing-content":{"ref":"getting-started/quickstart.html#writing-content","tf":0.023255813953488372},"getting-started/quickstart.html#readme.md":{"ref":"getting-started/quickstart.html#readme.md","tf":10.166666666666666}}}}}}}}},"l":{"docs":{"getting-started/more-pages.html#relative-and-absolute-paths":{"ref":"getting-started/more-pages.html#relative-and-absolute-paths","tf":3.395833333333333}},"e":{"docs":{},"a":{"docs":{},"s":{"docs":{"index.html#thanks":{"ref":"index.html#thanks","tf":0.045454545454545456}}}}}},"p":{"docs":{},"o":{"docs":{"advanced/gh-pages.html#adding-your-token":{"ref":"advanced/gh-pages.html#adding-your-token","tf":0.02702702702702703},"advanced/hacking.html#clone-the-repos":{"ref":"advanced/hacking.html#clone-the-repos","tf":5},"customization/config.html#available-configuration":{"ref":"customization/config.html#available-configuration","tf":0.01098901098901099}},"s":{"docs":{},"i":{"docs":{},"t":{"docs":{},"o":{"docs":{},"r":{"docs":{},"i":{"docs":{"advanced/gh-pages.html#generate-a-github-token":{"ref":"advanced/gh-pages.html#generate-a-github-token","tf":0.08333333333333333},"advanced/gh-pages.html#adding-your-token":{"ref":"advanced/gh-pages.html#adding-your-token","tf":0.02702702702702703},"advanced/hacking.html#set-up-a-folder":{"ref":"advanced/hacking.html#set-up-a-folder","tf":0.07142857142857142}}}}}}}},"’":{"docs":{"advanced/gh-pages.html#adding-your-token":{"ref":"advanced/gh-pages.html#adding-your-token","tf":0.02702702702702703}}}},"l":{"docs":{},"a":{"docs":{},"c":{"docs":{"customization/markdown.html#available-settings":{"ref":"customization/markdown.html#available-settings","tf":0.017857142857142856}}}}}},"s":{"docs":{},"o":{"docs":{},"u":{"docs":{},"r":{"docs":{},"c":{"docs":{"customization/config.html#available-configuration":{"ref":"customization/config.html#available-configuration","tf":0.01098901098901099}}}}}},"t":{"docs":{},"r":{"docs":{},"i":{"docs":{},"c":{"docs":{},"t":{"docs":{"customization/config.html#available-configuration":{"ref":"customization/config.html#available-configuration","tf":0.01098901098901099}}}}}}}},"n":{"docs":{},"d":{"docs":{},"e":{"docs":{},"r":{"docs":{"customization/markdown.html":{"ref":"customization/markdown.html","tf":0.09090909090909091}}}}}},"m":{"docs":{},"e":{"docs":{},"m":{"docs":{},"b":{"docs":{"getting-started/images-and-linking.html":{"ref":"getting-started/images-and-linking.html","tf":0.06666666666666667}}}}}},"c":{"docs":{},"o":{"docs":{},"m":{"docs":{},"m":{"docs":{},"e":{"docs":{},"n":{"docs":{},"d":{"docs":{"getting-started/more-pages.html#nesting":{"ref":"getting-started/more-pages.html#nesting","tf":0.05}}}}}}}}},"q":{"docs":{},"u":{"docs":{},"i":{"docs":{},"r":{"docs":{"getting-started/quickstart.html":{"ref":"getting-started/quickstart.html","tf":0.08333333333333333}}}}}}},"u":{"docs":{},"n":{"docs":{"index.html#usage":{"ref":"index.html#usage","tf":0.021739130434782608},"getting-started/quickstart.html#previewing-your-site":{"ref":"getting-started/quickstart.html#previewing-your-site","tf":0.06451612903225806}}}},"i":{"docs":{},"c":{"docs":{},"o":{"docs":{"index.html#thanks":{"ref":"index.html#thanks","tf":0.09090909090909091}},"s":{"docs":{},"t":{"docs":{},"a":{"docs":{},"c":{"docs":{},"r":{"docs":{},"u":{"docs":{},"z":{"docs":{},".":{"docs":{},"c":{"docs":{},"o":{"docs":{},"m":{"docs":{"index.html#thanks":{"ref":"index.html#thanks","tf":0.045454545454545456}}}}}}}}}}}}}}},"g":{"docs":{},"h":{"docs":{},"t":{"docs":{"advanced/gh-pages.html#configuring-builds":{"ref":"advanced/gh-pages.html#configuring-builds","tf":0.047619047619047616}}}}}},"s":{"docs":{},"t":{"docs":{},"a":{"docs":{},"c":{"docs":{},"r":{"docs":{},"u":{"docs":{},"z":{"docs":{"index.html#thanks":{"ref":"index.html#thanks","tf":0.09090909090909091}},"/":{"docs":{},"m":{"docs":{},"y":{"docs":{},"p":{"docs":{},"r":{"docs":{},"o":{"docs":{},"j":{"docs":{},"e":{"docs":{},"c":{"docs":{},"t":{"docs":{"advanced/gh-pages.html#for-node.js-projects":{"ref":"advanced/gh-pages.html#for-node.js-projects","tf":0.017543859649122806},"customization/config.html#example":{"ref":"customization/config.html#example","tf":0.06666666666666667}}}}}}}}}}},"o":{"docs":{},"n":{"docs":{},"m":{"docs":{},"o":{"docs":{},"u":{"docs":{},"n":{"docs":{},"t":{"docs":{"customization/config.html#example":{"ref":"customization/config.html#example","tf":0.06666666666666667}}}}}}}}}}}}}}}}},"a":{"docs":{},"k":{"docs":{},"e":{"docs":{"advanced/gh-pages.html#for-node.js-projects":{"ref":"advanced/gh-pages.html#for-node.js-projects","tf":0.017543859649122806}}}}},"o":{"docs":{},"o":{"docs":{},"t":{"docs":{"customization/config.html":{"ref":"customization/config.html","tf":0.037037037037037035},"customization/config.html#available-configuration":{"ref":"customization/config.html#available-configuration","tf":0.02197802197802198},"getting-started/more-pages.html":{"ref":"getting-started/more-pages.html","tf":0.043478260869565216}}}}}},"s":{"docs":{"getting-started/quickstart.html#previewing-your-site":{"ref":"getting-started/quickstart.html#previewing-your-site","tf":0.06451612903225806}},"t":{"docs":{},"a":{"docs":{"index.html#thanks":{"ref":"index.html#thanks","tf":0.09090909090909091}},"b":{"docs":{},"l":{"docs":{"index.html#what-is-it":{"ref":"index.html#what-is-it","tf":0.04}}}},"r":{"docs":{},"t":{"docs":{"index.html#usage":{"ref":"index.html#usage","tf":0.043478260869565216},"getting-started/quickstart.html":{"ref":"getting-started/quickstart.html","tf":4.333333333333333},"getting-started/quickstart.html#local-installation":{"ref":"getting-started/quickstart.html#local-installation","tf":1},"getting-started/quickstart.html#writing-content":{"ref":"getting-started/quickstart.html#writing-content","tf":1},"getting-started/quickstart.html#readme.md":{"ref":"getting-started/quickstart.html#readme.md","tf":1},"getting-started/quickstart.html#previewing-your-site":{"ref":"getting-started/quickstart.html#previewing-your-site","tf":1}},"e":{"docs":{},"d":{"docs":{},".":{"docs":{},"m":{"docs":{},"d":{"docs":{"getting-started/more-pages.html#docsreadme.md":{"ref":"getting-started/more-pages.html#docsreadme.md","tf":0.09090909090909091},"getting-started/more-pages.html#non-links":{"ref":"getting-started/more-pages.html#non-links","tf":0.045454545454545456}}}}},"]":{"docs":{},"(":{"docs":{},"i":{"docs":{},"n":{"docs":{},"t":{"docs":{},"r":{"docs":{},"o":{"docs":{},"/":{"docs":{},"g":{"docs":{},"e":{"docs":{},"t":{"docs":{"getting-started/more-pages.html#docsreadme.md":{"ref":"getting-started/more-pages.html#docsreadme.md","tf":0.09090909090909091},"getting-started/more-pages.html#non-links":{"ref":"getting-started/more-pages.html#non-links","tf":0.045454545454545456}}}}}}}}}}}}}}}}}},"i":{"docs":{},"l":{"docs":{},"l":{"docs":{"index.html#usage":{"ref":"index.html#usage","tf":0.021739130434782608},"getting-started/images-and-linking.html":{"ref":"getting-started/images-and-linking.html","tf":0.06666666666666667}}}}},"u":{"docs":{},"b":{"docs":{"advanced/hacking.html":{"ref":"advanced/hacking.html","tf":0.07142857142857142},"customization/css.html#docpress.json":{"ref":"customization/css.html#docpress.json","tf":0.125},"customization/plugins.html":{"ref":"customization/plugins.html","tf":0.2}}}},"y":{"docs":{},"l":{"docs":{"customization/css.html":{"ref":"customization/css.html","tf":0.037037037037037035}},"u":{"docs":{"customization/css.html":{"ref":"customization/css.html","tf":0.07407407407407407}}}}}},"u":{"docs":{},"p":{"docs":{},"p":{"docs":{},"o":{"docs":{},"r":{"docs":{},"t":{"docs":{"index.html#what-is-it":{"ref":"index.html#what-is-it","tf":0.04},"customization/config.html#available-configuration":{"ref":"customization/config.html#available-configuration","tf":0.01098901098901099},"customization/markdown.html#available-settings":{"ref":"customization/markdown.html#available-settings","tf":0.017857142857142856}}}}}}},"r":{"docs":{},"e":{"docs":{"advanced/gh-pages.html#adding-your-token":{"ref":"advanced/gh-pages.html#adding-your-token","tf":0.05405405405405406},"customization/markdown.html#installing-markdown-plugins":{"ref":"customization/markdown.html#installing-markdown-plugins","tf":0.05263157894736842}}}},"c":{"docs":{},"h":{"docs":{"customization/markdown.html#available-settings":{"ref":"customization/markdown.html#available-settings","tf":0.017857142857142856}}}},"b":{"docs":{"getting-started/more-pages.html#nesting":{"ref":"getting-started/more-pages.html#nesting","tf":0.05}}}},"i":{"docs":{},"n":{"docs":{},"g":{"docs":{},"l":{"docs":{"index.html#examples":{"ref":"index.html#examples","tf":0.16666666666666666}}}}},"t":{"docs":{},"e":{"docs":{"index.html#usage":{"ref":"index.html#usage","tf":0.021739130434782608},"customization/analytics.html":{"ref":"customization/analytics.html","tf":0.09090909090909091},"customization/analytics.html#docpress.json":{"ref":"customization/analytics.html#docpress.json","tf":0.034482758620689655},"getting-started/more-pages.html":{"ref":"getting-started/more-pages.html","tf":0.043478260869565216},"getting-started/more-pages.html#relative-and-absolute-paths":{"ref":"getting-started/more-pages.html#relative-and-absolute-paths","tf":0.0625},"getting-started/quickstart.html#previewing-your-site":{"ref":"getting-started/quickstart.html#previewing-your-site","tf":5.032258064516129}},"’":{"docs":{"getting-started/more-pages.html#setting-the-home-page":{"ref":"getting-started/more-pages.html#setting-the-home-page","tf":0.07692307692307693}}}}},"m":{"docs":{},"p":{"docs":{},"l":{"docs":{"getting-started/quickstart.html#writing-content":{"ref":"getting-started/quickstart.html#writing-content","tf":0.023255813953488372}},"i":{"docs":{},"f":{"docs":{},"i":{"docs":{"advanced/gh-pages.html#for-node.js-projects":{"ref":"advanced/gh-pages.html#for-node.js-projects","tf":0.017543859649122806}}}}}}}}},"e":{"docs":{},"e":{"docs":{"index.html#usage":{"ref":"index.html#usage","tf":0.021739130434782608},"customization/config.html#available-configuration":{"ref":"customization/config.html#available-configuration","tf":0.03296703296703297},"customization/markdown.html#plugins":{"ref":"customization/markdown.html#plugins","tf":0.05},"getting-started/quickstart.html#writing-content":{"ref":"getting-started/quickstart.html#writing-content","tf":0.023255813953488372}}},"r":{"docs":{},"v":{"docs":{"index.html#usage":{"ref":"index.html#usage","tf":0.021739130434782608},"getting-started/quickstart.html#previewing-your-site":{"ref":"getting-started/quickstart.html#previewing-your-site","tf":0.03225806451612903}},"e":{"docs":{},"r":{"docs":{"getting-started/quickstart.html#previewing-your-site":{"ref":"getting-started/quickstart.html#previewing-your-site","tf":0.06451612903225806}}}}}},"c":{"docs":{},"u":{"docs":{},"r":{"docs":{"advanced/gh-pages.html#adding-your-token":{"ref":"advanced/gh-pages.html#adding-your-token","tf":0.02702702702702703}}}},"t":{"docs":{},"i":{"docs":{},"o":{"docs":{},"n":{"docs":{"advanced/gh-pages.html#configuring-builds":{"ref":"advanced/gh-pages.html#configuring-builds","tf":0.047619047619047616}}}}}}},"t":{"docs":{"advanced/gh-pages.html#adding-your-token":{"ref":"advanced/gh-pages.html#adding-your-token","tf":0.02702702702702703},"advanced/hacking.html":{"ref":"advanced/hacking.html","tf":0.07142857142857142},"advanced/hacking.html#set-up-a-folder":{"ref":"advanced/hacking.html#set-up-a-folder","tf":3.333333333333333},"customization/config.html":{"ref":"customization/config.html","tf":0.07407407407407407},"customization/config.html#available-configuration":{"ref":"customization/config.html#available-configuration","tf":0.01098901098901099},"customization/css.html":{"ref":"customization/css.html","tf":0.037037037037037035},"customization/markdown.html":{"ref":"customization/markdown.html","tf":0.09090909090909091},"customization/markdown.html#available-settings":{"ref":"customization/markdown.html#available-settings","tf":5.053571428571429},"getting-started/more-pages.html#setting-the-home-page":{"ref":"getting-started/more-pages.html#setting-the-home-page","tf":3.333333333333333}}},"a":{"docs":{},"r":{"docs":{},"c":{"docs":{},"h":{"docs":{"advanced/hacking.html#link-them-all":{"ref":"advanced/hacking.html#link-them-all","tf":0.038461538461538464},"advanced/hacking.html#use-the-links":{"ref":"advanced/hacking.html#use-the-links","tf":0.02857142857142857},"customization/markdown.html#plugins":{"ref":"customization/markdown.html#plugins","tf":0.05}},".":{"docs":{},"g":{"docs":{},"i":{"docs":{},"t":{"docs":{"advanced/hacking.html#clone-the-repos":{"ref":"advanced/hacking.html#clone-the-repos","tf":0.06666666666666667}}}}}}}}}}},"a":{"docs":{},"f":{"docs":{},"e":{"docs":{"advanced/gh-pages.html#generate-a-github-token":{"ref":"advanced/gh-pages.html#generate-a-github-token","tf":0.041666666666666664}}}},"v":{"docs":{},"e":{"docs":{"advanced/gh-pages.html#for-node.js-projects":{"ref":"advanced/gh-pages.html#for-node.js-projects","tf":0.07017543859649122},"customization/config.html#available-configuration":{"ref":"customization/config.html#available-configuration","tf":0.01098901098901099},"customization/markdown.html#installing-markdown-plugins":{"ref":"customization/markdown.html#installing-markdown-plugins","tf":0.10526315789473684},"getting-started/quickstart.html#local-installation":{"ref":"getting-started/quickstart.html#local-installation","tf":0.05},"getting-started/quickstart.html#readme.md":{"ref":"getting-started/quickstart.html#readme.md","tf":0.16666666666666666}}}}},"o":{"docs":{},"m":{"docs":{},"e":{"docs":{},"w":{"docs":{},"h":{"docs":{},"e":{"docs":{},"r":{"docs":{"advanced/gh-pages.html#generate-a-github-token":{"ref":"advanced/gh-pages.html#generate-a-github-token","tf":0.041666666666666664}}}}}}}}},"h":{"docs":{},"o":{"docs":{},"w":{"docs":{"advanced/gh-pages.html#adding-your-token":{"ref":"advanced/gh-pages.html#adding-your-token","tf":0.02702702702702703}}},"r":{"docs":{},"t":{"docs":{"getting-started/quickstart.html#previewing-your-site":{"ref":"getting-started/quickstart.html#previewing-your-site","tf":0.03225806451612903}}}}}},"k":{"docs":{},"i":{"docs":{},"p":{"docs":{"advanced/gh-pages.html#configuring-builds":{"ref":"advanced/gh-pages.html#configuring-builds","tf":0.047619047619047616}}}}},"c":{"docs":{},"r":{"docs":{},"i":{"docs":{},"p":{"docs":{},"t":{"docs":{"advanced/gh-pages.html#for-node.js-projects":{"ref":"advanced/gh-pages.html#for-node.js-projects","tf":0.017543859649122806}}}}}}},"w":{"docs":{},"a":{"docs":{},"p":{"docs":{"advanced/gh-pages.html#for-non-js-projects":{"ref":"advanced/gh-pages.html#for-non-js-projects","tf":0.07142857142857142}}}}},"l":{"docs":{},"u":{"docs":{},"g":{"docs":{"customization/config.html#available-configuration":{"ref":"customization/config.html#available-configuration","tf":0.01098901098901099}}}}},"y":{"docs":{},"n":{"docs":{},"t":{"docs":{},"a":{"docs":{},"x":{"docs":{"customization/markdown.html#available-settings":{"ref":"customization/markdown.html#available-settings","tf":0.017857142857142856}}}}}}}},"v":{"docs":{},"e":{"docs":{},"r":{"docs":{},"i":{"docs":{"index.html#what-is-it":{"ref":"index.html#what-is-it","tf":0.04}}},"s":{"docs":{},"i":{"docs":{},"o":{"docs":{},"n":{"docs":{"customization/config.html#example":{"ref":"customization/config.html#example","tf":0.06666666666666667}}}}}}}},"a":{"docs":{},"r":{"docs":{},"i":{"docs":{},"a":{"docs":{},"b":{"docs":{},"l":{"docs":{"advanced/gh-pages.html#adding-your-token":{"ref":"advanced/gh-pages.html#adding-your-token","tf":0.02702702702702703}}}}}}},"l":{"docs":{},"u":{"docs":{"customization/markdown.html#docpress.json":{"ref":"customization/markdown.html#docpress.json","tf":0.034482758620689655}}}}},"i":{"docs":{},"e":{"docs":{},"w":{"docs":{"customization/analytics.html#docpress.json":{"ref":"customization/analytics.html#docpress.json","tf":0.034482758620689655}}}},"a":{"docs":{"customization/markdown.html#installing-markdown-plugins":{"ref":"customization/markdown.html#installing-markdown-plugins","tf":0.05263157894736842},"customization/markdown.html#bundled-plugins":{"ref":"customization/markdown.html#bundled-plugins","tf":0.05263157894736842},"getting-started/quickstart.html":{"ref":"getting-started/quickstart.html","tf":0.08333333333333333},"getting-started/quickstart.html#previewing-your-site":{"ref":"getting-started/quickstart.html#previewing-your-site","tf":0.03225806451612903}}}}},"l":{"docs":{},"e":{"docs":{},"t":{"docs":{},"’":{"docs":{"index.html#usage":{"ref":"index.html#usage","tf":0.021739130434782608},"getting-started/quickstart.html#previewing-your-site":{"ref":"getting-started/quickstart.html#previewing-your-site","tf":0.03225806451612903}}}},"v":{"docs":{},"e":{"docs":{},"l":{"docs":{"getting-started/more-pages.html#nesting":{"ref":"getting-started/more-pages.html#nesting","tf":0.05}}}}},"a":{"docs":{},"r":{"docs":{},"n":{"docs":{"getting-started/quickstart.html#writing-content":{"ref":"getting-started/quickstart.html#writing-content","tf":0.023255813953488372}}}}}},"i":{"docs":{},"v":{"docs":{},"e":{"docs":{"getting-started/more-pages.html":{"ref":"getting-started/more-pages.html","tf":0.043478260869565216}},"r":{"docs":{},"e":{"docs":{},"l":{"docs":{},"o":{"docs":{},"a":{"docs":{},"d":{"docs":{"index.html#usage":{"ref":"index.html#usage","tf":0.021739130434782608},"getting-started/quickstart.html#previewing-your-site":{"ref":"getting-started/quickstart.html#previewing-your-site","tf":0.03225806451612903}}}}}}}}}},"c":{"docs":{},"e":{"docs":{},"n":{"docs":{},"s":{"docs":{"index.html#thanks":{"ref":"index.html#thanks","tf":0.045454545454545456}}}}}},"s":{"docs":{},"t":{"docs":{"index.html#thanks":{"ref":"index.html#thanks","tf":0.045454545454545456},"customization/config.html#available-configuration":{"ref":"customization/config.html#available-configuration","tf":0.01098901098901099},"getting-started/more-pages.html":{"ref":"getting-started/more-pages.html","tf":0.043478260869565216},"getting-started/more-pages.html#create-your-toc":{"ref":"getting-started/more-pages.html#create-your-toc","tf":0.0625},"getting-started/more-pages.html#nesting":{"ref":"getting-started/more-pages.html#nesting","tf":0.05}}}},"n":{"docs":{},"k":{"docs":{"advanced/hacking.html#link-them-all":{"ref":"advanced/hacking.html#link-them-all","tf":10.192307692307692},"advanced/hacking.html#use-the-links":{"ref":"advanced/hacking.html#use-the-links","tf":5.2},"customization/config.html#available-configuration":{"ref":"customization/config.html#available-configuration","tf":0.01098901098901099},"customization/markdown.html#available-settings":{"ref":"customization/markdown.html#available-settings","tf":0.017857142857142856},"getting-started/images-and-linking.html":{"ref":"getting-started/images-and-linking.html","tf":6.566666666666666},"getting-started/more-pages.html#create-your-toc":{"ref":"getting-started/more-pages.html#create-your-toc","tf":0.0625},"getting-started/more-pages.html#non-links":{"ref":"getting-started/more-pages.html#non-links","tf":5.090909090909091},"getting-started/more-pages.html#relative-and-absolute-paths":{"ref":"getting-started/more-pages.html#relative-and-absolute-paths","tf":0.125}},"i":{"docs":{},"f":{"docs":{},"i":{"docs":{"customization/markdown.html#available-settings":{"ref":"customization/markdown.html#available-settings","tf":0.017857142857142856}}}}}},"e":{"docs":{"customization/markdown.html#available-settings":{"ref":"customization/markdown.html#available-settings","tf":0.03571428571428571}}}}},"o":{"docs":{},"g":{"docs":{"advanced/gh-pages.html#adding-your-token":{"ref":"advanced/gh-pages.html#adding-your-token","tf":0.02702702702702703},"customization/analytics.html#docpress.json":{"ref":"customization/analytics.html#docpress.json","tf":0.034482758620689655}}},"c":{"docs":{},"a":{"docs":{},"l":{"docs":{"advanced/gh-pages.html#configuring-builds":{"ref":"advanced/gh-pages.html#configuring-builds","tf":0.047619047619047616},"advanced/hacking.html":{"ref":"advanced/hacking.html","tf":0.07142857142857142},"advanced/hacking.html#link-them-all":{"ref":"advanced/hacking.html#link-them-all","tf":0.038461538461538464},"customization/analytics.html#docpress.json":{"ref":"customization/analytics.html#docpress.json","tf":0.034482758620689655},"customization/css.html":{"ref":"customization/css.html","tf":0.07407407407407407},"getting-started/quickstart.html#local-installation":{"ref":"getting-started/quickstart.html#local-installation","tf":5.025},"getting-started/quickstart.html#previewing-your-site":{"ref":"getting-started/quickstart.html#previewing-your-site","tf":0.06451612903225806}}},"t":{"docs":{"advanced/hacking.html#set-up-a-folder":{"ref":"advanced/hacking.html#set-up-a-folder","tf":0.07142857142857142}}}}},"a":{"docs":{},"d":{"docs":{"customization/config.html#available-configuration":{"ref":"customization/config.html#available-configuration","tf":0.01098901098901099},"customization/markdown.html#docpress.json":{"ref":"customization/markdown.html#docpress.json","tf":0.034482758620689655}}}},"o":{"docs":{},"k":{"docs":{"getting-started/more-pages.html":{"ref":"getting-started/more-pages.html","tf":0.043478260869565216}}}}},"a":{"docs":{},"n":{"docs":{},"g":{"docs":{"customization/markdown.html#available-settings":{"ref":"customization/markdown.html#available-settings","tf":0.017857142857142856}},"u":{"docs":{},"a":{"docs":{},"g":{"docs":{"advanced/gh-pages.html#.travis.yml":{"ref":"advanced/gh-pages.html#.travis.yml","tf":0.125},"advanced/gh-pages.html#for-non-js-projects":{"ref":"advanced/gh-pages.html#for-non-js-projects","tf":0.14285714285714285},"customization/markdown.html#available-settings":{"ref":"customization/markdown.html#available-settings","tf":0.017857142857142856}}}}},"p":{"docs":{},"r":{"docs":{},"e":{"docs":{},"f":{"docs":{},"i":{"docs":{},"x":{"docs":{"customization/markdown.html#available-settings":{"ref":"customization/markdown.html#available-settings","tf":0.017857142857142856}}}}}}}}}},"t":{"docs":{},"e":{"docs":{},"r":{"docs":{"getting-started/quickstart.html#writing-content":{"ref":"getting-started/quickstart.html#writing-content","tf":0.023255813953488372}}}}}}},"q":{"docs":{},"u":{"docs":{},"i":{"docs":{},"c":{"docs":{},"k":{"docs":{"getting-started/quickstart.html":{"ref":"getting-started/quickstart.html","tf":4.333333333333333},"getting-started/quickstart.html#local-installation":{"ref":"getting-started/quickstart.html#local-installation","tf":1},"getting-started/quickstart.html#writing-content":{"ref":"getting-started/quickstart.html#writing-content","tf":1},"getting-started/quickstart.html#readme.md":{"ref":"getting-started/quickstart.html#readme.md","tf":1},"getting-started/quickstart.html#previewing-your-site":{"ref":"getting-started/quickstart.html#previewing-your-site","tf":1}},"s":{"docs":{},"t":{"docs":{},"a":{"docs":{},"r":{"docs":{},"t":{"docs":{"index.html#usage":{"ref":"index.html#usage","tf":0.021739130434782608}}}}}}}}}},"o":{"docs":{},"t":{"docs":{"customization/markdown.html#available-settings":{"ref":"customization/markdown.html#available-settings","tf":0.05357142857142857}}}}}},"k":{"docs":{},"e":{"docs":{},"e":{"docs":{},"p":{"docs":{"advanced/gh-pages.html#generate-a-github-token":{"ref":"advanced/gh-pages.html#generate-a-github-token","tf":0.041666666666666664},"advanced/hacking.html#set-up-a-folder":{"ref":"advanced/hacking.html#set-up-a-folder","tf":0.07142857142857142}}}},"y":{"docs":{"customization/analytics.html":{"ref":"customization/analytics.html","tf":0.09090909090909091},"customization/config.html":{"ref":"customization/config.html","tf":0.037037037037037035},"customization/config.html#available-configuration":{"ref":"customization/config.html#available-configuration","tf":0.01098901098901099}}}}},"o":{"docs":{},"p":{"docs":{},"t":{"docs":{},"i":{"docs":{},"o":{"docs":{},"n":{"docs":{"advanced/gh-pages.html#adding-your-token":{"ref":"advanced/gh-pages.html#adding-your-token","tf":0.02702702702702703},"customization/analytics.html#docpress.json":{"ref":"customization/analytics.html#docpress.json","tf":0.034482758620689655},"customization/config.html#available-configuration":{"ref":"customization/config.html#available-configuration","tf":0.03296703296703297},"customization/markdown.html#docpress.json":{"ref":"customization/markdown.html#docpress.json","tf":0.06896551724137931},"customization/markdown.html#plugins":{"ref":"customization/markdown.html#plugins","tf":0.05},"getting-started/quickstart.html#local-installation":{"ref":"getting-started/quickstart.html#local-installation","tf":0.025}}}}}}},"u":{"docs":{},"t":{"docs":{"advanced/gh-pages.html#for-non-js-projects":{"ref":"advanced/gh-pages.html#for-non-js-projects","tf":0.07142857142857142}},"p":{"docs":{},"u":{"docs":{},"t":{"docs":{"getting-started/quickstart.html#local-installation":{"ref":"getting-started/quickstart.html#local-installation","tf":0.025}}}}}}},"n":{"docs":{"advanced/hacking.html#set-up-a-folder":{"ref":"advanced/hacking.html#set-up-a-folder","tf":0.07142857142857142},"getting-started/more-pages.html#create-your-toc":{"ref":"getting-started/more-pages.html#create-your-toc","tf":0.0625},"getting-started/more-pages.html#nesting":{"ref":"getting-started/more-pages.html#nesting","tf":0.05},"getting-started/quickstart.html#previewing-your-site":{"ref":"getting-started/quickstart.html#previewing-your-site","tf":0.03225806451612903}},"l":{"docs":{},"i":{"docs":{},"n":{"docs":{"customization/css.html":{"ref":"customization/css.html","tf":0.037037037037037035}}}}},"t":{"docs":{},"o":{"docs":{"customization/markdown.html#docpress.json":{"ref":"customization/markdown.html#docpress.json","tf":0.034482758620689655}}}}},"f":{"docs":{},"f":{"docs":{},"i":{"docs":{},"c":{"docs":{},"i":{"docs":{"customization/markdown.html#bundled-plugins":{"ref":"customization/markdown.html#bundled-plugins","tf":0.05263157894736842}}}}}}},"s":{"docs":{"getting-started/more-pages.html#docsreadme.md":{"ref":"getting-started/more-pages.html#docsreadme.md","tf":0.09090909090909091},"getting-started/more-pages.html#non-links":{"ref":"getting-started/more-pages.html#non-links","tf":0.045454545454545456}}},"r":{"docs":{},"g":{"docs":{},"a":{"docs":{},"n":{"docs":{"getting-started/more-pages.html#nesting":{"ref":"getting-started/more-pages.html#nesting","tf":0.05}}}}}}},"_":{"docs":{},"d":{"docs":{},"o":{"docs":{},"c":{"docs":{"advanced/gh-pages.html#configuring-builds":{"ref":"advanced/gh-pages.html#configuring-builds","tf":0.047619047619047616}},"p":{"docs":{},"r":{"docs":{},"e":{"docs":{},"s":{"docs":{},"s":{"docs":{"advanced/gh-pages.html#for-node.js-projects":{"ref":"advanced/gh-pages.html#for-node.js-projects","tf":0.017543859649122806},"customization/config.html#available-configuration":{"ref":"customization/config.html#available-configuration","tf":0.02197802197802198},"getting-started/quickstart.html#local-installation":{"ref":"getting-started/quickstart.html#local-installation","tf":0.05},"getting-started/quickstart.html#previewing-your-site":{"ref":"getting-started/quickstart.html#previewing-your-site","tf":0.03225806451612903}}}}}}}}}}},"j":{"docs":{},"s":{"docs":{"advanced/gh-pages.html#for-non-js-projects":{"ref":"advanced/gh-pages.html#for-non-js-projects","tf":3.333333333333333}}}},"x":{"docs":{},"h":{"docs":{},"t":{"docs":{},"m":{"docs":{},"l":{"docs":{},"o":{"docs":{},"u":{"docs":{},"t":{"docs":{"customization/markdown.html#available-settings":{"ref":"customization/markdown.html#available-settings","tf":0.017857142857142856}}}}}}}}},"]":{"docs":{},"(":{"docs":{},"i":{"docs":{},"n":{"docs":{},"s":{"docs":{},"t":{"docs":{},"a":{"docs":{},"l":{"docs":{},"l":{"docs":{},"a":{"docs":{},"t":{"docs":{},"i":{"docs":{},"o":{"docs":{},"n":{"docs":{},"/":{"docs":{},"o":{"docs":{},"s":{"docs":{},"x":{"docs":{},".":{"docs":{},"m":{"docs":{},"d":{"docs":{"getting-started/more-pages.html#docsreadme.md":{"ref":"getting-started/more-pages.html#docsreadme.md","tf":0.09090909090909091},"getting-started/more-pages.html#non-links":{"ref":"getting-started/more-pages.html#non-links","tf":0.045454545454545456}}}}}}}}}}}}}}}}}}}}}}}}},"length":872},"corpusTokens":["1","1.0.0","12345678","2","2015","350m","4","4.0","_doc","_docpress","abov","absolut","ad","add","after_success","allow","alreadi","altern","alternati","alway","analyt","appear","articl","author","auto","autom","automat","avail","base","base.git","basic","be","before_instal","behalf","behavior","block","both","br","branch","break","browser","build","bundl","c","call","case","cd","certain","chanc","chang","chapter","ci","ci.org/user/repo/set","class","cli","clone","close","code","command","commit","configur","consid","content","continu","contribut","contributor","convert","copi","core","core.git","correspond","creat","cruz","css","current","custom","decor","default","defin","deploy","descript","detail","dev","devdepend","develop","dist","doc","docpress","docpress.github.io","docpress.json","docs/extra.css","docs/introduction.md","docs/readme.md","docs/style.styl","document","domain","don't","don’t","down","e","easi","echo","eg","emoji","enabl","encrypt","end","endors","env","environ","equival","exact","exampl","exit","expand","extens","extern","extra","fals","far","fenc","few","fi","field","file","first","folder","folder—docpress","format","found","function","g","gener","get","gh","ghpage","git","git_email","git_nam","git_sourc","github","github_repo","github_token","github_token=\"your","github’","gitignor","given","global","go","googl","googleanalyt","googleanalytics.domain","googleanalytics.id","great","greatli","grow","guid","hack","happen","head","heavi","help","here","here’","higher","highlight","highlight.j","home","host","html","http://github.com/docpress/docpress","http://github.com/docpress/docpress.git","http://localhost:3000","http://ricostacruz.com/dom101","http://ricostacruz.com/onmount","http://site.com/external.css","https://travi","id","imag","indent","init","insid","instal","installation](install.md","installation](installation/readme.md","installation](intro/install.md","instanc","instruct","introduct","introduction](intro/readme.md","invok","item","it’","it’d","js","keep","key","lang","langprefix","languag","later","learn","let’","level","licens","line","link","linkifi","list","live","livereload","load","local","locat","log","look","mac","machin","made","magic","main","maintain","make","manifest","markdown","markdown.plugin","markdown–an","master","md","mit","mkdir","more","multipl","myproject","name","need","nest","new","next","nice","nobody@nobody.org","node.j","node_j","node_modules/.bin/docpress","node_modules/.bin/git","non","none","now","npm","nvm","offici","on","onlin","onto","option","organ","os","out","output","packag","package.json","page","pages—y","pageview","painless","paragraph","parent","pars","pass","path","place","plain","plugin","point","prefer","prefix","prevent","preview","probabl","project","project](../readme.md","project](/readme.md","projects/docpress","project’","publish","push","put","quick","quickstart","quot","rake","read","readm","readme.md","recommend","rel","releas","rememb","render","replac","repo","repositori","repo’","requir","resourc","restrict","rico","ricostacruz.com","right","root","rstacruz","rstacruz/myproject","rstacruz/onmount","run","s","safe","save","script","search","search.git","section","secur","see","serv","server","set","short","show","simpl","simplifi","singl","site","site’","skip","slug","somewher","sta","stabl","start","started.md","started](intro/get","still","stub","styl","stylu","sub","such","support","sure","swap","syntax","tabl","tag","tbd","test","text","thank","through","titl","toc","token","tool","track","travi","travis.yml","travis_branch","travis_pull_request","travis’","true","turn","twitter","typograh","typograph","ua","under","unord","up","updat","url","us","usag","user/repo","usual","valu","variabl","veri","version","via","view","want","watch","way","websit","website’","we’r","whatev","windows](installation/windows.md","without","wonder","write","written","x](installation/osx.md","xhtmlout"],"pipeline":["trimmer","stopWordFilter","stemmer"]});
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var lunr = require('lunr')

/**
 *     Search.search('foo')
 *     Search.lunr
 */

window.Search = (function () {
  var Search = {}

  Search.lunr = lunr.Index.load(window.__lunrindex)

  Search.search = function (keywords) {
    var results = Search.lunr.search(keywords)
    return results.map(function (result) {
      // result == { ref: 'index.html#usage', score: 0.99 }
      return window.__searchindex[result.ref]
    })
  }

  return Search
}())

},{"lunr":2}],2:[function(require,module,exports){
/**
 * lunr - http://lunrjs.com - A bit like Solr, but much smaller and not as bright - 0.5.12
 * Copyright (C) 2015 Oliver Nightingale
 * MIT Licensed
 * @license
 */

;(function(){

/**
 * Convenience function for instantiating a new lunr index and configuring it
 * with the default pipeline functions and the passed config function.
 *
 * When using this convenience function a new index will be created with the
 * following functions already in the pipeline:
 *
 * lunr.StopWordFilter - filters out any stop words before they enter the
 * index
 *
 * lunr.stemmer - stems the tokens before entering the index.
 *
 * Example:
 *
 *     var idx = lunr(function () {
 *       this.field('title', 10)
 *       this.field('tags', 100)
 *       this.field('body')
 *       
 *       this.ref('cid')
 *       
 *       this.pipeline.add(function () {
 *         // some custom pipeline function
 *       })
 *       
 *     })
 *
 * @param {Function} config A function that will be called with the new instance
 * of the lunr.Index as both its context and first parameter. It can be used to
 * customize the instance of new lunr.Index.
 * @namespace
 * @module
 * @returns {lunr.Index}
 *
 */
var lunr = function (config) {
  var idx = new lunr.Index

  idx.pipeline.add(
    lunr.trimmer,
    lunr.stopWordFilter,
    lunr.stemmer
  )

  if (config) config.call(idx, idx)

  return idx
}

lunr.version = "0.5.12"
/*!
 * lunr.utils
 * Copyright (C) 2015 Oliver Nightingale
 */

/**
 * A namespace containing utils for the rest of the lunr library
 */
lunr.utils = {}

/**
 * Print a warning message to the console.
 *
 * @param {String} message The message to be printed.
 * @memberOf Utils
 */
lunr.utils.warn = (function (global) {
  return function (message) {
    if (global.console && console.warn) {
      console.warn(message)
    }
  }
})(this)

/*!
 * lunr.EventEmitter
 * Copyright (C) 2015 Oliver Nightingale
 */

/**
 * lunr.EventEmitter is an event emitter for lunr. It manages adding and removing event handlers and triggering events and their handlers.
 *
 * @constructor
 */
lunr.EventEmitter = function () {
  this.events = {}
}

/**
 * Binds a handler function to a specific event(s).
 *
 * Can bind a single function to many different events in one call.
 *
 * @param {String} [eventName] The name(s) of events to bind this function to.
 * @param {Function} fn The function to call when an event is fired.
 * @memberOf EventEmitter
 */
lunr.EventEmitter.prototype.addListener = function () {
  var args = Array.prototype.slice.call(arguments),
      fn = args.pop(),
      names = args

  if (typeof fn !== "function") throw new TypeError ("last argument must be a function")

  names.forEach(function (name) {
    if (!this.hasHandler(name)) this.events[name] = []
    this.events[name].push(fn)
  }, this)
}

/**
 * Removes a handler function from a specific event.
 *
 * @param {String} eventName The name of the event to remove this function from.
 * @param {Function} fn The function to remove from an event.
 * @memberOf EventEmitter
 */
lunr.EventEmitter.prototype.removeListener = function (name, fn) {
  if (!this.hasHandler(name)) return

  var fnIndex = this.events[name].indexOf(fn)
  this.events[name].splice(fnIndex, 1)

  if (!this.events[name].length) delete this.events[name]
}

/**
 * Calls all functions bound to the given event.
 *
 * Additional data can be passed to the event handler as arguments to `emit`
 * after the event name.
 *
 * @param {String} eventName The name of the event to emit.
 * @memberOf EventEmitter
 */
lunr.EventEmitter.prototype.emit = function (name) {
  if (!this.hasHandler(name)) return

  var args = Array.prototype.slice.call(arguments, 1)

  this.events[name].forEach(function (fn) {
    fn.apply(undefined, args)
  })
}

/**
 * Checks whether a handler has ever been stored against an event.
 *
 * @param {String} eventName The name of the event to check.
 * @private
 * @memberOf EventEmitter
 */
lunr.EventEmitter.prototype.hasHandler = function (name) {
  return name in this.events
}

/*!
 * lunr.tokenizer
 * Copyright (C) 2015 Oliver Nightingale
 */

/**
 * A function for splitting a string into tokens ready to be inserted into
 * the search index.
 *
 * @module
 * @param {String} obj The string to convert into tokens
 * @returns {Array}
 */
lunr.tokenizer = function (obj) {
  if (!arguments.length || obj == null || obj == undefined) return []
  if (Array.isArray(obj)) return obj.map(function (t) { return t.toLowerCase() })

  return obj.toString().trim().toLowerCase().split(/[\s\-]+/)
}

/*!
 * lunr.Pipeline
 * Copyright (C) 2015 Oliver Nightingale
 */

/**
 * lunr.Pipelines maintain an ordered list of functions to be applied to all
 * tokens in documents entering the search index and queries being ran against
 * the index.
 *
 * An instance of lunr.Index created with the lunr shortcut will contain a
 * pipeline with a stop word filter and an English language stemmer. Extra
 * functions can be added before or after either of these functions or these
 * default functions can be removed.
 *
 * When run the pipeline will call each function in turn, passing a token, the
 * index of that token in the original list of all tokens and finally a list of
 * all the original tokens.
 *
 * The output of functions in the pipeline will be passed to the next function
 * in the pipeline. To exclude a token from entering the index the function
 * should return undefined, the rest of the pipeline will not be called with
 * this token.
 *
 * For serialisation of pipelines to work, all functions used in an instance of
 * a pipeline should be registered with lunr.Pipeline. Registered functions can
 * then be loaded. If trying to load a serialised pipeline that uses functions
 * that are not registered an error will be thrown.
 *
 * If not planning on serialising the pipeline then registering pipeline functions
 * is not necessary.
 *
 * @constructor
 */
lunr.Pipeline = function () {
  this._stack = []
}

lunr.Pipeline.registeredFunctions = {}

/**
 * Register a function with the pipeline.
 *
 * Functions that are used in the pipeline should be registered if the pipeline
 * needs to be serialised, or a serialised pipeline needs to be loaded.
 *
 * Registering a function does not add it to a pipeline, functions must still be
 * added to instances of the pipeline for them to be used when running a pipeline.
 *
 * @param {Function} fn The function to check for.
 * @param {String} label The label to register this function with
 * @memberOf Pipeline
 */
lunr.Pipeline.registerFunction = function (fn, label) {
  if (label in this.registeredFunctions) {
    lunr.utils.warn('Overwriting existing registered function: ' + label)
  }

  fn.label = label
  lunr.Pipeline.registeredFunctions[fn.label] = fn
}

/**
 * Warns if the function is not registered as a Pipeline function.
 *
 * @param {Function} fn The function to check for.
 * @private
 * @memberOf Pipeline
 */
lunr.Pipeline.warnIfFunctionNotRegistered = function (fn) {
  var isRegistered = fn.label && (fn.label in this.registeredFunctions)

  if (!isRegistered) {
    lunr.utils.warn('Function is not registered with pipeline. This may cause problems when serialising the index.\n', fn)
  }
}

/**
 * Loads a previously serialised pipeline.
 *
 * All functions to be loaded must already be registered with lunr.Pipeline.
 * If any function from the serialised data has not been registered then an
 * error will be thrown.
 *
 * @param {Object} serialised The serialised pipeline to load.
 * @returns {lunr.Pipeline}
 * @memberOf Pipeline
 */
lunr.Pipeline.load = function (serialised) {
  var pipeline = new lunr.Pipeline

  serialised.forEach(function (fnName) {
    var fn = lunr.Pipeline.registeredFunctions[fnName]

    if (fn) {
      pipeline.add(fn)
    } else {
      throw new Error('Cannot load un-registered function: ' + fnName)
    }
  })

  return pipeline
}

/**
 * Adds new functions to the end of the pipeline.
 *
 * Logs a warning if the function has not been registered.
 *
 * @param {Function} functions Any number of functions to add to the pipeline.
 * @memberOf Pipeline
 */
lunr.Pipeline.prototype.add = function () {
  var fns = Array.prototype.slice.call(arguments)

  fns.forEach(function (fn) {
    lunr.Pipeline.warnIfFunctionNotRegistered(fn)
    this._stack.push(fn)
  }, this)
}

/**
 * Adds a single function after a function that already exists in the
 * pipeline.
 *
 * Logs a warning if the function has not been registered.
 *
 * @param {Function} existingFn A function that already exists in the pipeline.
 * @param {Function} newFn The new function to add to the pipeline.
 * @memberOf Pipeline
 */
lunr.Pipeline.prototype.after = function (existingFn, newFn) {
  lunr.Pipeline.warnIfFunctionNotRegistered(newFn)

  var pos = this._stack.indexOf(existingFn)
  if (pos == -1) {
    throw new Error('Cannot find existingFn')
  }

  pos = pos + 1
  this._stack.splice(pos, 0, newFn)
}

/**
 * Adds a single function before a function that already exists in the
 * pipeline.
 *
 * Logs a warning if the function has not been registered.
 *
 * @param {Function} existingFn A function that already exists in the pipeline.
 * @param {Function} newFn The new function to add to the pipeline.
 * @memberOf Pipeline
 */
lunr.Pipeline.prototype.before = function (existingFn, newFn) {
  lunr.Pipeline.warnIfFunctionNotRegistered(newFn)

  var pos = this._stack.indexOf(existingFn)
  if (pos == -1) {
    throw new Error('Cannot find existingFn')
  }

  this._stack.splice(pos, 0, newFn)
}

/**
 * Removes a function from the pipeline.
 *
 * @param {Function} fn The function to remove from the pipeline.
 * @memberOf Pipeline
 */
lunr.Pipeline.prototype.remove = function (fn) {
  var pos = this._stack.indexOf(fn)
  if (pos == -1) {
    return
  }

  this._stack.splice(pos, 1)
}

/**
 * Runs the current list of functions that make up the pipeline against the
 * passed tokens.
 *
 * @param {Array} tokens The tokens to run through the pipeline.
 * @returns {Array}
 * @memberOf Pipeline
 */
lunr.Pipeline.prototype.run = function (tokens) {
  var out = [],
      tokenLength = tokens.length,
      stackLength = this._stack.length

  for (var i = 0; i < tokenLength; i++) {
    var token = tokens[i]

    for (var j = 0; j < stackLength; j++) {
      token = this._stack[j](token, i, tokens)
      if (token === void 0) break
    };

    if (token !== void 0) out.push(token)
  };

  return out
}

/**
 * Resets the pipeline by removing any existing processors.
 *
 * @memberOf Pipeline
 */
lunr.Pipeline.prototype.reset = function () {
  this._stack = []
}

/**
 * Returns a representation of the pipeline ready for serialisation.
 *
 * Logs a warning if the function has not been registered.
 *
 * @returns {Array}
 * @memberOf Pipeline
 */
lunr.Pipeline.prototype.toJSON = function () {
  return this._stack.map(function (fn) {
    lunr.Pipeline.warnIfFunctionNotRegistered(fn)

    return fn.label
  })
}
/*!
 * lunr.Vector
 * Copyright (C) 2015 Oliver Nightingale
 */

/**
 * lunr.Vectors implement vector related operations for
 * a series of elements.
 *
 * @constructor
 */
lunr.Vector = function () {
  this._magnitude = null
  this.list = undefined
  this.length = 0
}

/**
 * lunr.Vector.Node is a simple struct for each node
 * in a lunr.Vector.
 *
 * @private
 * @param {Number} The index of the node in the vector.
 * @param {Object} The data at this node in the vector.
 * @param {lunr.Vector.Node} The node directly after this node in the vector.
 * @constructor
 * @memberOf Vector
 */
lunr.Vector.Node = function (idx, val, next) {
  this.idx = idx
  this.val = val
  this.next = next
}

/**
 * Inserts a new value at a position in a vector.
 *
 * @param {Number} The index at which to insert a value.
 * @param {Object} The object to insert in the vector.
 * @memberOf Vector.
 */
lunr.Vector.prototype.insert = function (idx, val) {
  this._magnitude = undefined;
  var list = this.list

  if (!list) {
    this.list = new lunr.Vector.Node (idx, val, list)
    return this.length++
  }

  if (idx < list.idx) {
    this.list = new lunr.Vector.Node (idx, val, list)
    return this.length++
  }

  var prev = list,
      next = list.next

  while (next != undefined) {
    if (idx < next.idx) {
      prev.next = new lunr.Vector.Node (idx, val, next)
      return this.length++
    }

    prev = next, next = next.next
  }

  prev.next = new lunr.Vector.Node (idx, val, next)
  return this.length++
}

/**
 * Calculates the magnitude of this vector.
 *
 * @returns {Number}
 * @memberOf Vector
 */
lunr.Vector.prototype.magnitude = function () {
  if (this._magnitude) return this._magnitude
  var node = this.list,
      sumOfSquares = 0,
      val

  while (node) {
    val = node.val
    sumOfSquares += val * val
    node = node.next
  }

  return this._magnitude = Math.sqrt(sumOfSquares)
}

/**
 * Calculates the dot product of this vector and another vector.
 *
 * @param {lunr.Vector} otherVector The vector to compute the dot product with.
 * @returns {Number}
 * @memberOf Vector
 */
lunr.Vector.prototype.dot = function (otherVector) {
  var node = this.list,
      otherNode = otherVector.list,
      dotProduct = 0

  while (node && otherNode) {
    if (node.idx < otherNode.idx) {
      node = node.next
    } else if (node.idx > otherNode.idx) {
      otherNode = otherNode.next
    } else {
      dotProduct += node.val * otherNode.val
      node = node.next
      otherNode = otherNode.next
    }
  }

  return dotProduct
}

/**
 * Calculates the cosine similarity between this vector and another
 * vector.
 *
 * @param {lunr.Vector} otherVector The other vector to calculate the
 * similarity with.
 * @returns {Number}
 * @memberOf Vector
 */
lunr.Vector.prototype.similarity = function (otherVector) {
  return this.dot(otherVector) / (this.magnitude() * otherVector.magnitude())
}
/*!
 * lunr.SortedSet
 * Copyright (C) 2015 Oliver Nightingale
 */

/**
 * lunr.SortedSets are used to maintain an array of uniq values in a sorted
 * order.
 *
 * @constructor
 */
lunr.SortedSet = function () {
  this.length = 0
  this.elements = []
}

/**
 * Loads a previously serialised sorted set.
 *
 * @param {Array} serialisedData The serialised set to load.
 * @returns {lunr.SortedSet}
 * @memberOf SortedSet
 */
lunr.SortedSet.load = function (serialisedData) {
  var set = new this

  set.elements = serialisedData
  set.length = serialisedData.length

  return set
}

/**
 * Inserts new items into the set in the correct position to maintain the
 * order.
 *
 * @param {Object} The objects to add to this set.
 * @memberOf SortedSet
 */
lunr.SortedSet.prototype.add = function () {
  var i, element

  for (i = 0; i < arguments.length; i++) {
    element = arguments[i]
    if (~this.indexOf(element)) continue
    this.elements.splice(this.locationFor(element), 0, element)
  }

  this.length = this.elements.length
}

/**
 * Converts this sorted set into an array.
 *
 * @returns {Array}
 * @memberOf SortedSet
 */
lunr.SortedSet.prototype.toArray = function () {
  return this.elements.slice()
}

/**
 * Creates a new array with the results of calling a provided function on every
 * element in this sorted set.
 *
 * Delegates to Array.prototype.map and has the same signature.
 *
 * @param {Function} fn The function that is called on each element of the
 * set.
 * @param {Object} ctx An optional object that can be used as the context
 * for the function fn.
 * @returns {Array}
 * @memberOf SortedSet
 */
lunr.SortedSet.prototype.map = function (fn, ctx) {
  return this.elements.map(fn, ctx)
}

/**
 * Executes a provided function once per sorted set element.
 *
 * Delegates to Array.prototype.forEach and has the same signature.
 *
 * @param {Function} fn The function that is called on each element of the
 * set.
 * @param {Object} ctx An optional object that can be used as the context
 * @memberOf SortedSet
 * for the function fn.
 */
lunr.SortedSet.prototype.forEach = function (fn, ctx) {
  return this.elements.forEach(fn, ctx)
}

/**
 * Returns the index at which a given element can be found in the
 * sorted set, or -1 if it is not present.
 *
 * @param {Object} elem The object to locate in the sorted set.
 * @returns {Number}
 * @memberOf SortedSet
 */
lunr.SortedSet.prototype.indexOf = function (elem) {
  var start = 0,
      end = this.elements.length,
      sectionLength = end - start,
      pivot = start + Math.floor(sectionLength / 2),
      pivotElem = this.elements[pivot]

  while (sectionLength > 1) {
    if (pivotElem === elem) return pivot

    if (pivotElem < elem) start = pivot
    if (pivotElem > elem) end = pivot

    sectionLength = end - start
    pivot = start + Math.floor(sectionLength / 2)
    pivotElem = this.elements[pivot]
  }

  if (pivotElem === elem) return pivot

  return -1
}

/**
 * Returns the position within the sorted set that an element should be
 * inserted at to maintain the current order of the set.
 *
 * This function assumes that the element to search for does not already exist
 * in the sorted set.
 *
 * @param {Object} elem The elem to find the position for in the set
 * @returns {Number}
 * @memberOf SortedSet
 */
lunr.SortedSet.prototype.locationFor = function (elem) {
  var start = 0,
      end = this.elements.length,
      sectionLength = end - start,
      pivot = start + Math.floor(sectionLength / 2),
      pivotElem = this.elements[pivot]

  while (sectionLength > 1) {
    if (pivotElem < elem) start = pivot
    if (pivotElem > elem) end = pivot

    sectionLength = end - start
    pivot = start + Math.floor(sectionLength / 2)
    pivotElem = this.elements[pivot]
  }

  if (pivotElem > elem) return pivot
  if (pivotElem < elem) return pivot + 1
}

/**
 * Creates a new lunr.SortedSet that contains the elements in the intersection
 * of this set and the passed set.
 *
 * @param {lunr.SortedSet} otherSet The set to intersect with this set.
 * @returns {lunr.SortedSet}
 * @memberOf SortedSet
 */
lunr.SortedSet.prototype.intersect = function (otherSet) {
  var intersectSet = new lunr.SortedSet,
      i = 0, j = 0,
      a_len = this.length, b_len = otherSet.length,
      a = this.elements, b = otherSet.elements

  while (true) {
    if (i > a_len - 1 || j > b_len - 1) break

    if (a[i] === b[j]) {
      intersectSet.add(a[i])
      i++, j++
      continue
    }

    if (a[i] < b[j]) {
      i++
      continue
    }

    if (a[i] > b[j]) {
      j++
      continue
    }
  };

  return intersectSet
}

/**
 * Makes a copy of this set
 *
 * @returns {lunr.SortedSet}
 * @memberOf SortedSet
 */
lunr.SortedSet.prototype.clone = function () {
  var clone = new lunr.SortedSet

  clone.elements = this.toArray()
  clone.length = clone.elements.length

  return clone
}

/**
 * Creates a new lunr.SortedSet that contains the elements in the union
 * of this set and the passed set.
 *
 * @param {lunr.SortedSet} otherSet The set to union with this set.
 * @returns {lunr.SortedSet}
 * @memberOf SortedSet
 */
lunr.SortedSet.prototype.union = function (otherSet) {
  var longSet, shortSet, unionSet

  if (this.length >= otherSet.length) {
    longSet = this, shortSet = otherSet
  } else {
    longSet = otherSet, shortSet = this
  }

  unionSet = longSet.clone()

  unionSet.add.apply(unionSet, shortSet.toArray())

  return unionSet
}

/**
 * Returns a representation of the sorted set ready for serialisation.
 *
 * @returns {Array}
 * @memberOf SortedSet
 */
lunr.SortedSet.prototype.toJSON = function () {
  return this.toArray()
}
/*!
 * lunr.Index
 * Copyright (C) 2015 Oliver Nightingale
 */

/**
 * lunr.Index is object that manages a search index.  It contains the indexes
 * and stores all the tokens and document lookups.  It also provides the main
 * user facing API for the library.
 *
 * @constructor
 */
lunr.Index = function () {
  this._fields = []
  this._ref = 'id'
  this.pipeline = new lunr.Pipeline
  this.documentStore = new lunr.Store
  this.tokenStore = new lunr.TokenStore
  this.corpusTokens = new lunr.SortedSet
  this.eventEmitter =  new lunr.EventEmitter

  this._idfCache = {}

  this.on('add', 'remove', 'update', (function () {
    this._idfCache = {}
  }).bind(this))
}

/**
 * Bind a handler to events being emitted by the index.
 *
 * The handler can be bound to many events at the same time.
 *
 * @param {String} [eventName] The name(s) of events to bind the function to.
 * @param {Function} fn The serialised set to load.
 * @memberOf Index
 */
lunr.Index.prototype.on = function () {
  var args = Array.prototype.slice.call(arguments)
  return this.eventEmitter.addListener.apply(this.eventEmitter, args)
}

/**
 * Removes a handler from an event being emitted by the index.
 *
 * @param {String} eventName The name of events to remove the function from.
 * @param {Function} fn The serialised set to load.
 * @memberOf Index
 */
lunr.Index.prototype.off = function (name, fn) {
  return this.eventEmitter.removeListener(name, fn)
}

/**
 * Loads a previously serialised index.
 *
 * Issues a warning if the index being imported was serialised
 * by a different version of lunr.
 *
 * @param {Object} serialisedData The serialised set to load.
 * @returns {lunr.Index}
 * @memberOf Index
 */
lunr.Index.load = function (serialisedData) {
  if (serialisedData.version !== lunr.version) {
    lunr.utils.warn('version mismatch: current ' + lunr.version + ' importing ' + serialisedData.version)
  }

  var idx = new this

  idx._fields = serialisedData.fields
  idx._ref = serialisedData.ref

  idx.documentStore = lunr.Store.load(serialisedData.documentStore)
  idx.tokenStore = lunr.TokenStore.load(serialisedData.tokenStore)
  idx.corpusTokens = lunr.SortedSet.load(serialisedData.corpusTokens)
  idx.pipeline = lunr.Pipeline.load(serialisedData.pipeline)

  return idx
}

/**
 * Adds a field to the list of fields that will be searchable within documents
 * in the index.
 *
 * An optional boost param can be passed to affect how much tokens in this field
 * rank in search results, by default the boost value is 1.
 *
 * Fields should be added before any documents are added to the index, fields
 * that are added after documents are added to the index will only apply to new
 * documents added to the index.
 *
 * @param {String} fieldName The name of the field within the document that
 * should be indexed
 * @param {Number} boost An optional boost that can be applied to terms in this
 * field.
 * @returns {lunr.Index}
 * @memberOf Index
 */
lunr.Index.prototype.field = function (fieldName, opts) {
  var opts = opts || {},
      field = { name: fieldName, boost: opts.boost || 1 }

  this._fields.push(field)
  return this
}

/**
 * Sets the property used to uniquely identify documents added to the index,
 * by default this property is 'id'.
 *
 * This should only be changed before adding documents to the index, changing
 * the ref property without resetting the index can lead to unexpected results.
 *
 * @param {String} refName The property to use to uniquely identify the
 * documents in the index.
 * @param {Boolean} emitEvent Whether to emit add events, defaults to true
 * @returns {lunr.Index}
 * @memberOf Index
 */
lunr.Index.prototype.ref = function (refName) {
  this._ref = refName
  return this
}

/**
 * Add a document to the index.
 *
 * This is the way new documents enter the index, this function will run the
 * fields from the document through the index's pipeline and then add it to
 * the index, it will then show up in search results.
 *
 * An 'add' event is emitted with the document that has been added and the index
 * the document has been added to. This event can be silenced by passing false
 * as the second argument to add.
 *
 * @param {Object} doc The document to add to the index.
 * @param {Boolean} emitEvent Whether or not to emit events, default true.
 * @memberOf Index
 */
lunr.Index.prototype.add = function (doc, emitEvent) {
  var docTokens = {},
      allDocumentTokens = new lunr.SortedSet,
      docRef = doc[this._ref],
      emitEvent = emitEvent === undefined ? true : emitEvent

  this._fields.forEach(function (field) {
    var fieldTokens = this.pipeline.run(lunr.tokenizer(doc[field.name]))

    docTokens[field.name] = fieldTokens
    lunr.SortedSet.prototype.add.apply(allDocumentTokens, fieldTokens)
  }, this)

  this.documentStore.set(docRef, allDocumentTokens)
  lunr.SortedSet.prototype.add.apply(this.corpusTokens, allDocumentTokens.toArray())

  for (var i = 0; i < allDocumentTokens.length; i++) {
    var token = allDocumentTokens.elements[i]
    var tf = this._fields.reduce(function (memo, field) {
      var fieldLength = docTokens[field.name].length

      if (!fieldLength) return memo

      var tokenCount = docTokens[field.name].filter(function (t) { return t === token }).length

      return memo + (tokenCount / fieldLength * field.boost)
    }, 0)

    this.tokenStore.add(token, { ref: docRef, tf: tf })
  };

  if (emitEvent) this.eventEmitter.emit('add', doc, this)
}

/**
 * Removes a document from the index.
 *
 * To make sure documents no longer show up in search results they can be
 * removed from the index using this method.
 *
 * The document passed only needs to have the same ref property value as the
 * document that was added to the index, they could be completely different
 * objects.
 *
 * A 'remove' event is emitted with the document that has been removed and the index
 * the document has been removed from. This event can be silenced by passing false
 * as the second argument to remove.
 *
 * @param {Object} doc The document to remove from the index.
 * @param {Boolean} emitEvent Whether to emit remove events, defaults to true
 * @memberOf Index
 */
lunr.Index.prototype.remove = function (doc, emitEvent) {
  var docRef = doc[this._ref],
      emitEvent = emitEvent === undefined ? true : emitEvent

  if (!this.documentStore.has(docRef)) return

  var docTokens = this.documentStore.get(docRef)

  this.documentStore.remove(docRef)

  docTokens.forEach(function (token) {
    this.tokenStore.remove(token, docRef)
  }, this)

  if (emitEvent) this.eventEmitter.emit('remove', doc, this)
}

/**
 * Updates a document in the index.
 *
 * When a document contained within the index gets updated, fields changed,
 * added or removed, to make sure it correctly matched against search queries,
 * it should be updated in the index.
 *
 * This method is just a wrapper around `remove` and `add`
 *
 * An 'update' event is emitted with the document that has been updated and the index.
 * This event can be silenced by passing false as the second argument to update. Only
 * an update event will be fired, the 'add' and 'remove' events of the underlying calls
 * are silenced.
 *
 * @param {Object} doc The document to update in the index.
 * @param {Boolean} emitEvent Whether to emit update events, defaults to true
 * @see Index.prototype.remove
 * @see Index.prototype.add
 * @memberOf Index
 */
lunr.Index.prototype.update = function (doc, emitEvent) {
  var emitEvent = emitEvent === undefined ? true : emitEvent

  this.remove(doc, false)
  this.add(doc, false)

  if (emitEvent) this.eventEmitter.emit('update', doc, this)
}

/**
 * Calculates the inverse document frequency for a token within the index.
 *
 * @param {String} token The token to calculate the idf of.
 * @see Index.prototype.idf
 * @private
 * @memberOf Index
 */
lunr.Index.prototype.idf = function (term) {
  var cacheKey = "@" + term
  if (Object.prototype.hasOwnProperty.call(this._idfCache, cacheKey)) return this._idfCache[cacheKey]

  var documentFrequency = this.tokenStore.count(term),
      idf = 1

  if (documentFrequency > 0) {
    idf = 1 + Math.log(this.documentStore.length / documentFrequency)
  }

  return this._idfCache[cacheKey] = idf
}

/**
 * Searches the index using the passed query.
 *
 * Queries should be a string, multiple words are allowed and will lead to an
 * AND based query, e.g. `idx.search('foo bar')` will run a search for
 * documents containing both 'foo' and 'bar'.
 *
 * All query tokens are passed through the same pipeline that document tokens
 * are passed through, so any language processing involved will be run on every
 * query term.
 *
 * Each query term is expanded, so that the term 'he' might be expanded to
 * 'hello' and 'help' if those terms were already included in the index.
 *
 * Matching documents are returned as an array of objects, each object contains
 * the matching document ref, as set for this index, and the similarity score
 * for this document against the query.
 *
 * @param {String} query The query to search the index with.
 * @returns {Object}
 * @see Index.prototype.idf
 * @see Index.prototype.documentVector
 * @memberOf Index
 */
lunr.Index.prototype.search = function (query) {
  var queryTokens = this.pipeline.run(lunr.tokenizer(query)),
      queryVector = new lunr.Vector,
      documentSets = [],
      fieldBoosts = this._fields.reduce(function (memo, f) { return memo + f.boost }, 0)

  var hasSomeToken = queryTokens.some(function (token) {
    return this.tokenStore.has(token)
  }, this)

  if (!hasSomeToken) return []

  queryTokens
    .forEach(function (token, i, tokens) {
      var tf = 1 / tokens.length * this._fields.length * fieldBoosts,
          self = this

      var set = this.tokenStore.expand(token).reduce(function (memo, key) {
        var pos = self.corpusTokens.indexOf(key),
            idf = self.idf(key),
            similarityBoost = 1,
            set = new lunr.SortedSet

        // if the expanded key is not an exact match to the token then
        // penalise the score for this key by how different the key is
        // to the token.
        if (key !== token) {
          var diff = Math.max(3, key.length - token.length)
          similarityBoost = 1 / Math.log(diff)
        }

        // calculate the query tf-idf score for this token
        // applying an similarityBoost to ensure exact matches
        // these rank higher than expanded terms
        if (pos > -1) queryVector.insert(pos, tf * idf * similarityBoost)

        // add all the documents that have this key into a set
        Object.keys(self.tokenStore.get(key)).forEach(function (ref) { set.add(ref) })

        return memo.union(set)
      }, new lunr.SortedSet)

      documentSets.push(set)
    }, this)

  var documentSet = documentSets.reduce(function (memo, set) {
    return memo.intersect(set)
  })

  return documentSet
    .map(function (ref) {
      return { ref: ref, score: queryVector.similarity(this.documentVector(ref)) }
    }, this)
    .sort(function (a, b) {
      return b.score - a.score
    })
}

/**
 * Generates a vector containing all the tokens in the document matching the
 * passed documentRef.
 *
 * The vector contains the tf-idf score for each token contained in the
 * document with the passed documentRef.  The vector will contain an element
 * for every token in the indexes corpus, if the document does not contain that
 * token the element will be 0.
 *
 * @param {Object} documentRef The ref to find the document with.
 * @returns {lunr.Vector}
 * @private
 * @memberOf Index
 */
lunr.Index.prototype.documentVector = function (documentRef) {
  var documentTokens = this.documentStore.get(documentRef),
      documentTokensLength = documentTokens.length,
      documentVector = new lunr.Vector

  for (var i = 0; i < documentTokensLength; i++) {
    var token = documentTokens.elements[i],
        tf = this.tokenStore.get(token)[documentRef].tf,
        idf = this.idf(token)

    documentVector.insert(this.corpusTokens.indexOf(token), tf * idf)
  };

  return documentVector
}

/**
 * Returns a representation of the index ready for serialisation.
 *
 * @returns {Object}
 * @memberOf Index
 */
lunr.Index.prototype.toJSON = function () {
  return {
    version: lunr.version,
    fields: this._fields,
    ref: this._ref,
    documentStore: this.documentStore.toJSON(),
    tokenStore: this.tokenStore.toJSON(),
    corpusTokens: this.corpusTokens.toJSON(),
    pipeline: this.pipeline.toJSON()
  }
}

/**
 * Applies a plugin to the current index.
 *
 * A plugin is a function that is called with the index as its context.
 * Plugins can be used to customise or extend the behaviour the index
 * in some way. A plugin is just a function, that encapsulated the custom
 * behaviour that should be applied to the index.
 *
 * The plugin function will be called with the index as its argument, additional
 * arguments can also be passed when calling use. The function will be called
 * with the index as its context.
 *
 * Example:
 *
 *     var myPlugin = function (idx, arg1, arg2) {
 *       // `this` is the index to be extended
 *       // apply any extensions etc here.
 *     }
 *
 *     var idx = lunr(function () {
 *       this.use(myPlugin, 'arg1', 'arg2')
 *     })
 *
 * @param {Function} plugin The plugin to apply.
 * @memberOf Index
 */
lunr.Index.prototype.use = function (plugin) {
  var args = Array.prototype.slice.call(arguments, 1)
  args.unshift(this)
  plugin.apply(this, args)
}
/*!
 * lunr.Store
 * Copyright (C) 2015 Oliver Nightingale
 */

/**
 * lunr.Store is a simple key-value store used for storing sets of tokens for
 * documents stored in index.
 *
 * @constructor
 * @module
 */
lunr.Store = function () {
  this.store = {}
  this.length = 0
}

/**
 * Loads a previously serialised store
 *
 * @param {Object} serialisedData The serialised store to load.
 * @returns {lunr.Store}
 * @memberOf Store
 */
lunr.Store.load = function (serialisedData) {
  var store = new this

  store.length = serialisedData.length
  store.store = Object.keys(serialisedData.store).reduce(function (memo, key) {
    memo[key] = lunr.SortedSet.load(serialisedData.store[key])
    return memo
  }, {})

  return store
}

/**
 * Stores the given tokens in the store against the given id.
 *
 * @param {Object} id The key used to store the tokens against.
 * @param {Object} tokens The tokens to store against the key.
 * @memberOf Store
 */
lunr.Store.prototype.set = function (id, tokens) {
  if (!this.has(id)) this.length++
  this.store[id] = tokens
}

/**
 * Retrieves the tokens from the store for a given key.
 *
 * @param {Object} id The key to lookup and retrieve from the store.
 * @returns {Object}
 * @memberOf Store
 */
lunr.Store.prototype.get = function (id) {
  return this.store[id]
}

/**
 * Checks whether the store contains a key.
 *
 * @param {Object} id The id to look up in the store.
 * @returns {Boolean}
 * @memberOf Store
 */
lunr.Store.prototype.has = function (id) {
  return id in this.store
}

/**
 * Removes the value for a key in the store.
 *
 * @param {Object} id The id to remove from the store.
 * @memberOf Store
 */
lunr.Store.prototype.remove = function (id) {
  if (!this.has(id)) return

  delete this.store[id]
  this.length--
}

/**
 * Returns a representation of the store ready for serialisation.
 *
 * @returns {Object}
 * @memberOf Store
 */
lunr.Store.prototype.toJSON = function () {
  return {
    store: this.store,
    length: this.length
  }
}

/*!
 * lunr.stemmer
 * Copyright (C) 2015 Oliver Nightingale
 * Includes code from - http://tartarus.org/~martin/PorterStemmer/js.txt
 */

/**
 * lunr.stemmer is an english language stemmer, this is a JavaScript
 * implementation of the PorterStemmer taken from http://tartarus.org/~martin
 *
 * @module
 * @param {String} str The string to stem
 * @returns {String}
 * @see lunr.Pipeline
 */
lunr.stemmer = (function(){
  var step2list = {
      "ational" : "ate",
      "tional" : "tion",
      "enci" : "ence",
      "anci" : "ance",
      "izer" : "ize",
      "bli" : "ble",
      "alli" : "al",
      "entli" : "ent",
      "eli" : "e",
      "ousli" : "ous",
      "ization" : "ize",
      "ation" : "ate",
      "ator" : "ate",
      "alism" : "al",
      "iveness" : "ive",
      "fulness" : "ful",
      "ousness" : "ous",
      "aliti" : "al",
      "iviti" : "ive",
      "biliti" : "ble",
      "logi" : "log"
    },

    step3list = {
      "icate" : "ic",
      "ative" : "",
      "alize" : "al",
      "iciti" : "ic",
      "ical" : "ic",
      "ful" : "",
      "ness" : ""
    },

    c = "[^aeiou]",          // consonant
    v = "[aeiouy]",          // vowel
    C = c + "[^aeiouy]*",    // consonant sequence
    V = v + "[aeiou]*",      // vowel sequence

    mgr0 = "^(" + C + ")?" + V + C,               // [C]VC... is m>0
    meq1 = "^(" + C + ")?" + V + C + "(" + V + ")?$",  // [C]VC[V] is m=1
    mgr1 = "^(" + C + ")?" + V + C + V + C,       // [C]VCVC... is m>1
    s_v = "^(" + C + ")?" + v;                   // vowel in stem

  var re_mgr0 = new RegExp(mgr0);
  var re_mgr1 = new RegExp(mgr1);
  var re_meq1 = new RegExp(meq1);
  var re_s_v = new RegExp(s_v);

  var re_1a = /^(.+?)(ss|i)es$/;
  var re2_1a = /^(.+?)([^s])s$/;
  var re_1b = /^(.+?)eed$/;
  var re2_1b = /^(.+?)(ed|ing)$/;
  var re_1b_2 = /.$/;
  var re2_1b_2 = /(at|bl|iz)$/;
  var re3_1b_2 = new RegExp("([^aeiouylsz])\\1$");
  var re4_1b_2 = new RegExp("^" + C + v + "[^aeiouwxy]$");

  var re_1c = /^(.+?[^aeiou])y$/;
  var re_2 = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/;

  var re_3 = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/;

  var re_4 = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;
  var re2_4 = /^(.+?)(s|t)(ion)$/;

  var re_5 = /^(.+?)e$/;
  var re_5_1 = /ll$/;
  var re3_5 = new RegExp("^" + C + v + "[^aeiouwxy]$");

  var porterStemmer = function porterStemmer(w) {
    var   stem,
      suffix,
      firstch,
      re,
      re2,
      re3,
      re4;

    if (w.length < 3) { return w; }

    firstch = w.substr(0,1);
    if (firstch == "y") {
      w = firstch.toUpperCase() + w.substr(1);
    }

    // Step 1a
    re = re_1a
    re2 = re2_1a;

    if (re.test(w)) { w = w.replace(re,"$1$2"); }
    else if (re2.test(w)) { w = w.replace(re2,"$1$2"); }

    // Step 1b
    re = re_1b;
    re2 = re2_1b;
    if (re.test(w)) {
      var fp = re.exec(w);
      re = re_mgr0;
      if (re.test(fp[1])) {
        re = re_1b_2;
        w = w.replace(re,"");
      }
    } else if (re2.test(w)) {
      var fp = re2.exec(w);
      stem = fp[1];
      re2 = re_s_v;
      if (re2.test(stem)) {
        w = stem;
        re2 = re2_1b_2;
        re3 = re3_1b_2;
        re4 = re4_1b_2;
        if (re2.test(w)) {  w = w + "e"; }
        else if (re3.test(w)) { re = re_1b_2; w = w.replace(re,""); }
        else if (re4.test(w)) { w = w + "e"; }
      }
    }

    // Step 1c - replace suffix y or Y by i if preceded by a non-vowel which is not the first letter of the word (so cry -> cri, by -> by, say -> say)
    re = re_1c;
    if (re.test(w)) {
      var fp = re.exec(w);
      stem = fp[1];
      w = stem + "i";
    }

    // Step 2
    re = re_2;
    if (re.test(w)) {
      var fp = re.exec(w);
      stem = fp[1];
      suffix = fp[2];
      re = re_mgr0;
      if (re.test(stem)) {
        w = stem + step2list[suffix];
      }
    }

    // Step 3
    re = re_3;
    if (re.test(w)) {
      var fp = re.exec(w);
      stem = fp[1];
      suffix = fp[2];
      re = re_mgr0;
      if (re.test(stem)) {
        w = stem + step3list[suffix];
      }
    }

    // Step 4
    re = re_4;
    re2 = re2_4;
    if (re.test(w)) {
      var fp = re.exec(w);
      stem = fp[1];
      re = re_mgr1;
      if (re.test(stem)) {
        w = stem;
      }
    } else if (re2.test(w)) {
      var fp = re2.exec(w);
      stem = fp[1] + fp[2];
      re2 = re_mgr1;
      if (re2.test(stem)) {
        w = stem;
      }
    }

    // Step 5
    re = re_5;
    if (re.test(w)) {
      var fp = re.exec(w);
      stem = fp[1];
      re = re_mgr1;
      re2 = re_meq1;
      re3 = re3_5;
      if (re.test(stem) || (re2.test(stem) && !(re3.test(stem)))) {
        w = stem;
      }
    }

    re = re_5_1;
    re2 = re_mgr1;
    if (re.test(w) && re2.test(w)) {
      re = re_1b_2;
      w = w.replace(re,"");
    }

    // and turn initial Y back to y

    if (firstch == "y") {
      w = firstch.toLowerCase() + w.substr(1);
    }

    return w;
  };

  return porterStemmer;
})();

lunr.Pipeline.registerFunction(lunr.stemmer, 'stemmer')
/*!
 * lunr.stopWordFilter
 * Copyright (C) 2015 Oliver Nightingale
 */

/**
 * lunr.stopWordFilter is an English language stop word list filter, any words
 * contained in the list will not be passed through the filter.
 *
 * This is intended to be used in the Pipeline. If the token does not pass the
 * filter then undefined will be returned.
 *
 * @module
 * @param {String} token The token to pass through the filter
 * @returns {String}
 * @see lunr.Pipeline
 */
lunr.stopWordFilter = function (token) {
  if (token && lunr.stopWordFilter.stopWords[token] !== token) return token;
}

lunr.stopWordFilter.stopWords = {
  'a': 'a',
  'able': 'able',
  'about': 'about',
  'across': 'across',
  'after': 'after',
  'all': 'all',
  'almost': 'almost',
  'also': 'also',
  'am': 'am',
  'among': 'among',
  'an': 'an',
  'and': 'and',
  'any': 'any',
  'are': 'are',
  'as': 'as',
  'at': 'at',
  'be': 'be',
  'because': 'because',
  'been': 'been',
  'but': 'but',
  'by': 'by',
  'can': 'can',
  'cannot': 'cannot',
  'could': 'could',
  'dear': 'dear',
  'did': 'did',
  'do': 'do',
  'does': 'does',
  'either': 'either',
  'else': 'else',
  'ever': 'ever',
  'every': 'every',
  'for': 'for',
  'from': 'from',
  'get': 'get',
  'got': 'got',
  'had': 'had',
  'has': 'has',
  'have': 'have',
  'he': 'he',
  'her': 'her',
  'hers': 'hers',
  'him': 'him',
  'his': 'his',
  'how': 'how',
  'however': 'however',
  'i': 'i',
  'if': 'if',
  'in': 'in',
  'into': 'into',
  'is': 'is',
  'it': 'it',
  'its': 'its',
  'just': 'just',
  'least': 'least',
  'let': 'let',
  'like': 'like',
  'likely': 'likely',
  'may': 'may',
  'me': 'me',
  'might': 'might',
  'most': 'most',
  'must': 'must',
  'my': 'my',
  'neither': 'neither',
  'no': 'no',
  'nor': 'nor',
  'not': 'not',
  'of': 'of',
  'off': 'off',
  'often': 'often',
  'on': 'on',
  'only': 'only',
  'or': 'or',
  'other': 'other',
  'our': 'our',
  'own': 'own',
  'rather': 'rather',
  'said': 'said',
  'say': 'say',
  'says': 'says',
  'she': 'she',
  'should': 'should',
  'since': 'since',
  'so': 'so',
  'some': 'some',
  'than': 'than',
  'that': 'that',
  'the': 'the',
  'their': 'their',
  'them': 'them',
  'then': 'then',
  'there': 'there',
  'these': 'these',
  'they': 'they',
  'this': 'this',
  'tis': 'tis',
  'to': 'to',
  'too': 'too',
  'twas': 'twas',
  'us': 'us',
  'wants': 'wants',
  'was': 'was',
  'we': 'we',
  'were': 'were',
  'what': 'what',
  'when': 'when',
  'where': 'where',
  'which': 'which',
  'while': 'while',
  'who': 'who',
  'whom': 'whom',
  'why': 'why',
  'will': 'will',
  'with': 'with',
  'would': 'would',
  'yet': 'yet',
  'you': 'you',
  'your': 'your'
}

lunr.Pipeline.registerFunction(lunr.stopWordFilter, 'stopWordFilter')
/*!
 * lunr.trimmer
 * Copyright (C) 2015 Oliver Nightingale
 */

/**
 * lunr.trimmer is a pipeline function for trimming non word
 * characters from the begining and end of tokens before they
 * enter the index.
 *
 * This implementation may not work correctly for non latin
 * characters and should either be removed or adapted for use
 * with languages with non-latin characters.
 *
 * @module
 * @param {String} token The token to pass through the filter
 * @returns {String}
 * @see lunr.Pipeline
 */
lunr.trimmer = function (token) {
  var result = token.replace(/^\W+/, '')
                    .replace(/\W+$/, '')
  return result === '' ? undefined : result
}

lunr.Pipeline.registerFunction(lunr.trimmer, 'trimmer')
/*!
 * lunr.stemmer
 * Copyright (C) 2015 Oliver Nightingale
 * Includes code from - http://tartarus.org/~martin/PorterStemmer/js.txt
 */

/**
 * lunr.TokenStore is used for efficient storing and lookup of the reverse
 * index of token to document ref.
 *
 * @constructor
 */
lunr.TokenStore = function () {
  this.root = { docs: {} }
  this.length = 0
}

/**
 * Loads a previously serialised token store
 *
 * @param {Object} serialisedData The serialised token store to load.
 * @returns {lunr.TokenStore}
 * @memberOf TokenStore
 */
lunr.TokenStore.load = function (serialisedData) {
  var store = new this

  store.root = serialisedData.root
  store.length = serialisedData.length

  return store
}

/**
 * Adds a new token doc pair to the store.
 *
 * By default this function starts at the root of the current store, however
 * it can start at any node of any token store if required.
 *
 * @param {String} token The token to store the doc under
 * @param {Object} doc The doc to store against the token
 * @param {Object} root An optional node at which to start looking for the
 * correct place to enter the doc, by default the root of this lunr.TokenStore
 * is used.
 * @memberOf TokenStore
 */
lunr.TokenStore.prototype.add = function (token, doc, root) {
  var root = root || this.root,
      key = token[0],
      rest = token.slice(1)

  if (!(key in root)) root[key] = {docs: {}}

  if (rest.length === 0) {
    root[key].docs[doc.ref] = doc
    this.length += 1
    return
  } else {
    return this.add(rest, doc, root[key])
  }
}

/**
 * Checks whether this key is contained within this lunr.TokenStore.
 *
 * By default this function starts at the root of the current store, however
 * it can start at any node of any token store if required.
 *
 * @param {String} token The token to check for
 * @param {Object} root An optional node at which to start
 * @memberOf TokenStore
 */
lunr.TokenStore.prototype.has = function (token) {
  if (!token) return false

  var node = this.root

  for (var i = 0; i < token.length; i++) {
    if (!node[token[i]]) return false

    node = node[token[i]]
  }

  return true
}

/**
 * Retrieve a node from the token store for a given token.
 *
 * By default this function starts at the root of the current store, however
 * it can start at any node of any token store if required.
 *
 * @param {String} token The token to get the node for.
 * @param {Object} root An optional node at which to start.
 * @returns {Object}
 * @see TokenStore.prototype.get
 * @memberOf TokenStore
 */
lunr.TokenStore.prototype.getNode = function (token) {
  if (!token) return {}

  var node = this.root

  for (var i = 0; i < token.length; i++) {
    if (!node[token[i]]) return {}

    node = node[token[i]]
  }

  return node
}

/**
 * Retrieve the documents for a node for the given token.
 *
 * By default this function starts at the root of the current store, however
 * it can start at any node of any token store if required.
 *
 * @param {String} token The token to get the documents for.
 * @param {Object} root An optional node at which to start.
 * @returns {Object}
 * @memberOf TokenStore
 */
lunr.TokenStore.prototype.get = function (token, root) {
  return this.getNode(token, root).docs || {}
}

lunr.TokenStore.prototype.count = function (token, root) {
  return Object.keys(this.get(token, root)).length
}

/**
 * Remove the document identified by ref from the token in the store.
 *
 * By default this function starts at the root of the current store, however
 * it can start at any node of any token store if required.
 *
 * @param {String} token The token to get the documents for.
 * @param {String} ref The ref of the document to remove from this token.
 * @param {Object} root An optional node at which to start.
 * @returns {Object}
 * @memberOf TokenStore
 */
lunr.TokenStore.prototype.remove = function (token, ref) {
  if (!token) return
  var node = this.root

  for (var i = 0; i < token.length; i++) {
    if (!(token[i] in node)) return
    node = node[token[i]]
  }

  delete node.docs[ref]
}

/**
 * Find all the possible suffixes of the passed token using tokens
 * currently in the store.
 *
 * @param {String} token The token to expand.
 * @returns {Array}
 * @memberOf TokenStore
 */
lunr.TokenStore.prototype.expand = function (token, memo) {
  var root = this.getNode(token),
      docs = root.docs || {},
      memo = memo || []

  if (Object.keys(docs).length) memo.push(token)

  Object.keys(root)
    .forEach(function (key) {
      if (key === 'docs') return

      memo.concat(this.expand(token + key, memo))
    }, this)

  return memo
}

/**
 * Returns a representation of the token store ready for serialisation.
 *
 * @returns {Object}
 * @memberOf TokenStore
 */
lunr.TokenStore.prototype.toJSON = function () {
  return {
    root: this.root,
    length: this.length
  }
}


  /**
   * export the module via AMD, CommonJS or as a browser global
   * Export code from https://github.com/umdjs/umd/blob/master/returnExports.js
   */
  ;(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
      // AMD. Register as an anonymous module.
      define(factory)
    } else if (typeof exports === 'object') {
      /**
       * Node. Does not work with strict CommonJS, but
       * only CommonJS-like enviroments that support module.exports,
       * like Node.
       */
      module.exports = factory()
    } else {
      // Browser globals (root is window)
      root.lunr = factory()
    }
  }(this, function () {
    /**
     * Just return a value to define the module export.
     * This example returns an object, but the module
     * can return a function as the exported value.
     */
    return lunr
  }))
})();

},{}]},{},[1]);
