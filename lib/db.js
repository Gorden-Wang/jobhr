/**
 * Created by gorden on 14-9-3.
 */
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/hr");

var db = mongoose.connection;

db.on('error',console.error.bind(console,'connection error:'));

db.once('open',function test(){
    console.log("aaaa");
});

var hrSchema = mongoose.Schema({
    workExperience: String,//工作年限
    degree: String,//学历
    departmentName: String,//部门 "数据平台事业部-商家数据业务部-数据挖掘&安全&架构",
    workLocation:String,//城市 "北京市",
    requirement: String,//"岗位要求： <br/>1.	我们是在业务前线战斗的团队，所以我们十分欢迎既有深厚技术功底同时又具备优秀商业意识的人才，二者缺一不可！数据掘项目经验丰富，在挖掘模型应用上有成功案例，对数据挖掘方法论有深刻理解，能深入分析、定位业务问题，利用挖掘模型解决。 <br/>2.	对电子商务体系有一定的熟悉度和见解，有精准广告、电子商务从业背景三年以上互联网、电信、金融等行业的数据分析/挖掘相关工作经验优先； <br/>3.	熟练掌握Hive\SQL，JAVA\C++\python 至少熟练掌握一种编程语言。 <br/>4.	从事过机器学习、数据挖掘、统计分析、推荐等算法相关的项目经验，熟悉常见的概率统计、数据挖掘、机器学习算法，包括回归、决策树、SVM、朴素贝叶斯、神经网络、k-means等常用算法的适用场景、优点、缺点以及弥补办法 <br/>5.	熟悉Hadoop、Hive、流式计算、实时计算等大数据相关技术者优先。优先考虑有自然语言处理经验的人才，要求有实际的中大型项目经验，掌握PLSA\LDA\HMM 等文本处理算法。",
    firstCategory:String,//岗位类别 "数据类",
    code: String,//职位号"GP011589",
    description:String,//描述 "我们致力于使用数据挖掘、机器学习等技术从大数据中提炼出有商业价值的数据成果。我们的使命主要包括两个方面： <br/>1.	使用大数据挖掘出的成果实现数字化智能化运营以助力电商用户成长。 <br/>2.	为那些在电商领域怀揣梦想的软件公司提供数据挖掘模型或挖掘成果，以帮助其降低使用大数据挖掘的门槛。 <br/>主要工作内容： <br/>1.	负责构建用户精准运营或CRM营销体系模型以及电商整个营销环节数据挖掘： <br/>2.	深入理解产品业务的方向和战略、针对具体的业务问题，规划、设计基于数据挖掘的解决方案； <br/>3.	使用阿里大数据平台和算法工具完成模型的工程化，并与业务部门沟通合作，将数据模型应用于实际业务；",
    name: String,//职位名称"数据挖掘专家-商家数据-数据平台",
    from:String//bd al
});



var jobmodel = mongoose.model('job',hrSchema);

var job = new jobmodel({
    workExperience: "工作年限",
    degree: "学历",
    departmentName: "数据平台事业部-商家数据业务部-数据挖掘&安全&架构",
    workLocation:"北京市",
    requirement: "岗位要求： <br/>1.	我们是在业务前线战斗的团队，所以我们十分欢迎既有深厚技术功底同时又具备优秀商业意识的人才，二者缺一不可！数据掘项目经验丰富，在挖掘模型应用上有成功案例，对数据挖掘方法论有深刻理解，能深入分析、定位业务问题，利用挖掘模型解决。 <br/>2.	对电子商务体系有一定的熟悉度和见解，有精准广告、电子商务从业背景三年以上互联网、电信、金融等行业的数据分析/挖掘相关工作经验优先； <br/>3.	熟练掌握Hive\SQL，JAVA\C++\python 至少熟练掌握一种编程语言。 <br/>4.	从事过机器学习、数据挖掘、统计分析、推荐等算法相关的项目经验，熟悉常见的概率统计、数据挖掘、机器学习算法，包括回归、决策树、SVM、朴素贝叶斯、神经网络、k-means等常用算法的适用场景、优点、缺点以及弥补办法 <br/>5.	熟悉Hadoop、Hive、流式计算、实时计算等大数据相关技术者优先。优先考虑有自然语言处理经验的人才，要求有实际的中大型项目经验，掌握PLSA\LDA\HMM 等文本处理算法。",
    firstCategory: "数据类",
    code: "GP011589",
    description: "我们致力于使用数据挖掘、机器学习等技术从大数据中提炼出有商业价值的数据成果。我们的使命主要包括两个方面： <br/>1.	使用大数据挖掘出的成果实现数字化智能化运营以助力电商用户成长。 <br/>2.	为那些在电商领域怀揣梦想的软件公司提供数据挖掘模型或挖掘成果，以帮助其降低使用大数据挖掘的门槛。 <br/>主要工作内容： <br/>1.	负责构建用户精准运营或CRM营销体系模型以及电商整个营销环节数据挖掘： <br/>2.	深入理解产品业务的方向和战略、针对具体的业务问题，规划、设计基于数据挖掘的解决方案； <br/>3.	使用阿里大数据平台和算法工具完成模型的工程化，并与业务部门沟通合作，将数据模型应用于实际业务；",
    name: "数据挖掘专家-商家数据-数据平台",
    from:"al"
});

job.save(function(err,job){
    //console.log(job)
})


jobmodel.find(function(err,jobs){
   console.log(jobs)
});