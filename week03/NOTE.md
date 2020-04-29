# 每周总结可以写在这里

Reference 类型 类似指针
    通过key访问object

Expression 
    Member(成员属性访问)
        a.b
        a[b]
        foo`string`
        super.b——调用父类的成员属性和方法
        super['b']
        new.target——早期无法判断是否是new出来实例
        new Foo()——带括号的优先级更高
    New
	    new Foo——new一个对象
    Call——优先级低于New
        foo()
        super()
        foo()['b']
        foo().b
        foo()`string`

    Left Handside & Right handside——等号左边和右边
        Left Handside (赋值操作的目标) Reference 引用
​       Right Handside (赋值操作的来源)

        Right Handside
        Update
            a++/--
            ++/--a

        Unary
            delete
            void 0
            typeof
            + a / - a
            ~a
            !a
            await a

        Exponental
            **

        Multiplicative
            Number类型的乘法
        Additive
            Number类型的加法
            String类型的加法

        Shift
            << >> >>>

        Relationship
            < > <= >= instanceof in
        
        Equality
            ==
            !=
            ===
            !==
        Bitwise 位运算
            & ^ |

        Logical

            && ||

Statement
    简单语句
        ExpressionStatement
        EmptyStatement
        DebuggerStatement
        ThrowStatement
        ContinueStatement
        BreakStatement
        ReturnStatement
    组合语句
        BlockStatement
        IfStatement
        IterationStatement
        Statement
        TryStatement
    声明
        FunctionDeclaration
        GeneratorDeclaration
        AsyncFunctionDeclaration
        AsyncGeneratorDeclaration
        VariableDeclaration
        ClassDeclaration
        LexicalDeclaration

一共有34个object
ecma-262 18.3.1 - 18.3.34
1.String
2.Nmber
3.Boolean
4.Symbol
5.Object
6.Array
7.Map
8.Date
9.RegExp
10.Promise
11.Proxy
12.WeakMap
13.Set
14.WeakSet
15.Function
16.Error
17.EvalError
18.RangeError
19.ReferenceError
20.SyntaxError
21.TypeError
22.URIError
23.ArrayBuffer
24.SharedArrayBuffer
25.DataView
26.Float32Array
27.Float64Array
28.Int8Array
39.Int16Array
30.Int32Array
31.UInt8Array
32.UInt16Array
33.UInt32Array
34.UInt8ClampedArray


特殊对象
Function Object
    [[call]] 有该字段则可以被当做函数调用
    [[Construct]] 可以通过new操作符返回对象对象。

Array Object
    [[DefineOwnProperty]]
    数组对象，独有特殊属性length。每个Array对象都有一个不可配置的length属性，length属性表示Array的元素个数，会随元素个数的变化而变化，其最大值是2³²-1。

Arguments Object
    [[callee]] 视为函数参数对对象，伪数组caller

Object
    [[Get]] property被访问时调用 get
    [[Set]] property被赋值时调用 set
    [[GetPrototypeOf]] 对应getPrototypeOf方法 获取对象原型
    [[SetPrototypeOf]] 对应setPrototypeOf方法 设置对象原型
    [[GetOwnProperty]] getOwnPropertyDescriptor 获取对象私有属性的描述列表
    [[HasProperty]] hasOwnProperty 私有属性判断
    [[IsExtensible]] isExtensible对象是否可扩展
    [[PreventExtensions]] preventExtension控制对象是否可以添加属性
    [[DefineOwnProperty]] defineProperty 定义对象属性
    [[Delete]] delete 操作符
    [[OwnPropertyKeys]] Object.keys() Object.entries() Object.values()
    [[Call]] 能够调用call

Module Namespece
    [[Module]] 视为一个引入的模块
    [[Exports]] 视为一个导出的模块