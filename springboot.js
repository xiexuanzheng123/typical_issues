/**
 * spring boot note
 * Spring的AOP存在的目的是为了解耦，AOP让一组类共享相同的行为。在AOP中只能通过继承类和实现接口来使代码
 * 耦合度增强，且类继承只能单继承，阻碍更多行为添加到一个组类上，AOP弥补了OOP的不足
 * 1 使用@aspect声明一个切面
 * 2 使用@After、@Before、@Around定义建言，可以直接将拦截规则作为参数
 */