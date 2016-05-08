module.exports ="precision mediump float;\n"
+ "varying vec2 v_texCoord;\n"
+"uniform float time;\n"
+"uniform vec2 mouse_touch;\n"
+"uniform vec2 resolution;\n"


+"void main( void ) {\n"
+"\n"
+"	vec2 position = ( gl_FragCoord.xy / resolution.xy ) + mouse_touch / 4.0;\n"
+"\n"
+"	float color = 0.0;\n"
+"	color += sin( position.x * cos( time / 15.0 ) * 80.0 ) + cos( position.y * cos( time / 15.0 ) * 10.0 );\n"
+"	color += sin( position.y * sin( time / 10.0 ) * 40.0 ) + cos( position.x * sin( time / 25.0 ) * 40.0 );\n"
+"	color += sin( position.x * sin( time / 5.0 ) * 10.0 ) + sin( position.y * sin( time / 35.0 ) * 80.0 );\n"
+"	color *= sin( time / 10.0 ) * 0.5;\n"
+"\n"
+"	gl_FragColor = vec4( vec3( color, color * 0.5, sin( color + time / 3.0 ) * 0.75 ), 1.0 );\n"
+"\n"
+"}\n"