StringLiteral
    DoubleStringCharacter ::
        SourceCharacter but not one of " or \ or LineTerminator
        <LS>
        <PS>
        \ EscapeSequence
        LineContinuation
    SingleStringCharacter ::
        SourceCharacter but not one of ' or \ or LineTerminator
        <LS>
        <PS>
        \ EscapeSequence
        LineContinuation

        <!-- 行终止符 
        U+000A LINE FEED (LF) <LF>
        U+000D CARRIAGE RETURN (CR) <CR>
        U+2028 LINE SEPARATOR <LS>
        U+2029 PARAGRAPH SEPARATOR <PS> -->
        
        LineTerminator ::
            <LF>
            <CR>
            <LS>
            <PS>
            

        LineTerminatorSequence ::
            <LF>
            <CR> [lookahead no <LF> ]
            <LS>
            <PS>
            <CR>
            <CR> <LF>


        <!-- 转义字符 -->
        EscapeSequence ::
            CharacterEscapeSequence 
            0 [lookahead ∉ DecimalDigit]
            HexEscapeSequence   \\x[0-9A-F]{2}$
            UnicodeEscapeSequence   \\u[0-9A-F]{4}$

            
            CharacterEscapeSequence ::
                SingleEscapeCharacter       /(\\['"\\bfnrtv])+/
                NonEscapeCharacter          /\\[^0-9ux'"\\bfnrtv]\u000A\u000D\u2028\2029]/
        
        <!-- 行连接字符 -->
        LineContinuation :: 
            \ LineTerminatorSequence

汇总
/[^\\\u000A\u000D\u2028\2029]|(\\['"\\bfnrtv])+| \\[^0-9ux'"\\bfnrtv\u000A\u000D\u2028\2029]{1} | \\x[0-9A-F]{2}$ || \\u[0-9A-F]{4}$/
