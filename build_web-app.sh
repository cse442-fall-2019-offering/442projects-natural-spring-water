#!/bin/bash

cd /web/CSE442-542/2019-Fall/cse-442n/442projects-natural-spring-water/ub_course_viewer/

npm run build

rm -rf /web/CSE442-542/2019-Fall/cse-442n/build/
cp -r /web/CSE442-542/2019-Fall/cse-442n/442projects-natural-spring-water/ub_course_viewer/build/ /web/CSE442-542/2019-Fall/cse-442n/.

sed -i 's|href="/manifest.json"|href="/CSE442-542/2019-Fall/cse-442n/build/manifest.json|g' /web/CSE442-542/2019-Fall/cse-442n/build/index.html
sed -i 's|href="/static/css/|href="/CSE442-542/2019-Fall/cse-442n/build/static/css/|g' /web/CSE442-542/2019-Fall/cse-442n/build/index.html
sed -i 's|<script src="/static/js/|<script src="/CSE442-542/2019-Fall/cse-442n/build/static/js/|g' /web/CSE442-542/2019-Fall/cse-442n/build/index.html

cp /web/CSE442-542/2019-Fall/cse-442n/442projects-natural-spring-water/ub_course_viewer/src/index_0.php /web/CSE442-542/2019-Fall/cse-442n/build/index_0.php
