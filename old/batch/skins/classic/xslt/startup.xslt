<!-- 
	jGrouseDoc template file. Renders main index page with all the frames
	@Copyright (c) 2007 by Denis Riabtchik. All rights reserved. See license.txt and http://jgrouse.com for details@
	$Id: startup.xslt 249 2007-11-12 00:51:31Z denis.riabtchik $
-->

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	version="1.0">
	<xsl:param name='rootPath' />
	<xsl:param name="projectName"/>
	<xsl:param name='version'/>
    <xsl:param name='aux_css'>not_specified</xsl:param>
		
	
	<xsl:output method='HTML' doctype-public="-//W3C//DTD HTML 4.01 Frameset//EN"
		doctype-system="http://www.w3.org/TR/html4/frameset.dtd">
	</xsl:output>
	<xsl:import href="../../common/xslt/common.xslt"/>
	
<xsl:template match="/">
<HTML>
<HEAD>
<xsl:comment>Documentation for <xsl:value-of select="$projectName"/>. Generated by jGrouseDoc</xsl:comment>

<TITLE>
<xsl:value-of select="$projectName"/>
</TITLE>
     <xsl:call-template name="writeCss">
          <xsl:with-param name="rootPath"><xsl:value-of select="$rootPath"/></xsl:with-param>
          <xsl:with-param name="aux_css"><xsl:value-of select="$aux_css"/></xsl:with-param>
      </xsl:call-template>

</HEAD>
<FRAMESET cols="20%,80%" title="" >
	<FRAMESET rows="30%,70%" title="" >
		<FRAME src="overview-frame-log.html" name="packageListFrame" title="All Packages"/>
		<FRAME src="allclasses-frame.html" name="packageFrame" title="All classes and interfaces (except non-static nested types)"/>
	</FRAMESET>
	<FRAME src="overview-summary-log.html" name="classFrame" title="Package, class and interface descriptions" scrolling="yes"/>
</FRAMESET>
</HTML>
</xsl:template>

</xsl:stylesheet>