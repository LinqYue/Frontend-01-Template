# 每周总结可以写在这里

编程语言知识
	非形式语言
        中文，英文
	形式语言（乔姆斯基谱系）
		1.  0型 无限制文法，对引擎实现者非常不友好
                ?::=?
		2.  1型 上下文相关文法（<A>的意思与前后的的东西有关）
                ?<A>?::=?<B>?
		3.  2型 上下文无关文法（<A>的意思固定）
                <A>::=?
		4.  3型 正则文法，限制表达能力
                <A>::=<A>?  只允许左递归

        js以2型为主，大部分表达式式都是3型

    产生式（BNF）
        
        用尖括号括起来的名称来表示语法结构名

        语法结构分成基础结构和需要用其他语法结构定义的符合结构,基础结构成为终结符,符合结构成为非终结符

        引号和中间的字符表示终结符,可以有括号, * 表示重复多次, | 表示或, + 表示至少一次

        <Number> = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"

        <DecimalNumber> = "0" | {("1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9")+ <Number>*} 

        <AdditiveExpression> = <DecimalNumber> | <AdditiveExpression> "+" <DecimalNumber>

        <MultiplicativeExpression> = <DecimalNumber> | <MultiplicativeExpression> "*" <DecimalNumber>

        <LogicalExpression> = <AdditiveExpression> | 
	        <LogicalExpression> "||" <AdditiveExpression> |
	        <LogicalExpression> "&&" <AdditiveExpression>
                                          


    图灵完备性,一切可计算的问题都能计算，这样的虚拟机或者编程语言就叫图灵完备的
        命名式 --- 图灵机
            goto
            if和while
        声明式 --- lambda
            递归

    动态和静态

        动态
            Runtime
            
            在用户的设备/在线服务器上
            
            产品实际运行时
            
        静态  
            在程序员的设备上
            
            产品开发时
            
            Compiletime




        类型系统          
            动态类型系统和静态类型系统
            
            强类型（无隐式转换的）与弱类型（能隐式转换的）
            
            复合类型 
                结构体
                函数签名
            
            子类型 
                协变和逆变(父子互相调用的方法)

