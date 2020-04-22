LineTerminator 行终止符
U+000A LINE FEED (LF) <LF>
U+000D CARRIAGE RETURN (CR) <CR>
U+2028 LINE SEPARATOR <LS>
U+2029 PARAGRAPH SEPARATOR <PS>

EscapeSequence 转义字符
\b 0x0008 BACKSPACE <BS>
\t 0x0009 CHARACTER TABULATION <HT>
\n 0x000A LINE FEED (LF) <LF>
\v 0x000B LINE TABULATION <VT>
\f 0x000C FORM FEED (FF) <FF>
\r 0x000D CARRIAGE RETURN (CR) <CR>
\" 0x0022 QUOTATION MARK "
\' 0x0027 APOSTROPHE '
\\ 0x005C REVERSE SOLIDUS \

LineContinuation 行连接字符
 \ LineTerminatorSequence

 LineTerminatorSequence ::
    <LF>
    <CR> [lookahead no <LF> ]
    <LS>
    <PS>
    <CR>
    <CR> <LF>

String
    SourceCharacter but not one of \ or LineTerminator
    <LS>
    <PS>
    \ EscapeSequence
    LineContinuation
