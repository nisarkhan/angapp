<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:s="urn:sunshine.local">
    <xsl:output method="html" indent="yes" />

    <xsl:template match="/">
        <xsl:text disable-output-escaping="yes">&lt;!DOCTYPE html&gt;</xsl:text>
        <html>
            <head>
                <title>Web services</title>
                <style>
                    body {
                        font-family: Verdana;
                        font-size: 12px;
                    }
                    dt {
                        font-size: 1.1em;
                        font-weight: bold;
                        background-color: #eee;
                    }
                    .reqres {
                        font-size: 0.9em;
                        font-weight: bold;
                        border-bottom: solid 1px lightgrey;
                    }
                    .desc {
                        padding: 1em 0;
                    }
                </style>
            </head>
            <body>
                <h3>Web services</h3>
                <xsl:apply-templates />
            </body>
        </html>
    </xsl:template>
    
    <!-- endpoint -->
    <xsl:template match="s:endpoint">
        <dl>
            <dt>
                <xsl:value-of select="s:url" />
            </dt>
            <dd>
                <div class="desc">
                    <xsl:value-of select="s:description" disable-output-escaping="yes" />
                </div>
                <div class="reqres">
                    Request (
                    <xsl:value-of select="s:request/@method" />
                    <xsl:if test="s:request/@contentType">; 
                        <xsl:value-of select="s:request/@contentType" />
                    </xsl:if>
                    )
                </div>
                <pre>
                    <xsl:for-each select="s:request/s:parameter">
                        <xsl:value-of select="@name" />: <xsl:value-of select="@value" />
<xsl:text>
</xsl:text>
                    </xsl:for-each>
                </pre>
                <div class="reqres">Response (<xsl:value-of select="s:response/@contentType" />)</div>
                <xsl:if test="s:response/s:json">
                    <pre><xsl:value-of select="s:response/s:json" /></pre>
                </xsl:if>
            </dd>
        </dl>
    </xsl:template>
   
</xsl:stylesheet>
