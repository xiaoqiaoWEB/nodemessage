# node-vue-message-mysql
利用node 搭建一个 小留言板
# 功能需求

- 用户注册
    - 需要登录：否
    - 提交数据：用户名、密码、重复密码（用于注册验证）
- 用户登录
    - 需要登录：否
    - 提交数据：用户名、密码
- 内容发布
    - 需要登录：是
    - 提交数据：标题、内容
- 内容浏览
    - 需要登录：否
    - 提交数据：无
    - 获取数据：
        - 当前页对应的数据：包含标题、内容、评论数、点赞数的数据集合
        - 分页数据：包含总记录条数
- 点赞
    - 需要登录：是
    - 重复点赞：否
    - 提交数据：被点赞的talk的id
- 回复
    - 需要登录：是
    - 重复回复：是
    - 提交数据：被回复的talk的id和内容


#数据库 -表
### 用户表
> **Table: users**

|名称|类型|允许空|默认值|主键|说明|
|:--:|:--:|:--:|:--:|:--:|:--:|
| id | INTEGER | No | - | Yes | 用户id |
| username | VARCHAR(20) | No | - | No | 用户名 |
| password | CHAR(32) | No | - | No | 密码 |

> **Indexes**

|名称|字段|类型|
|:--:|:--:|:--:|
| username | username | unique |

### 内容表
> **Table: contents**

|名称|类型|允许空|默认值|主键|说明|
|:-:|:--:|:----:|:---:|:--:|:--:|
| id | INTEGER | No | - | Yes | 内容id |
| user_id | INTEGER | No | - | No | 评论用户id |
| title | VARCHAR(50) | No | - | No | 标题 |
| content | VARCHAR(1000) | No | - | No | 内容 |
| like_count | INTEGER | No | 0 | No | 点赞数 |
| comment_count | INTEGER | No | 0 | No | 评论数 |

> **Indexes**

|名称|字段|类型|
|:--:|:--:|:--:|
| user_id | user_id | Normal |

> **Foreign Key**

|名称|外键表|外键表字段|
|:--:|:--:|:--:|
| user_id | users | id |

### 评论表
> **Table: comments**

|名称|类型|允许空|默认值|主键|说明|
|:-:|:--:|:----:|:---:|:--:|:--:|
| id | INTEGER | No | - | Yes | 评论id |
| content_id | INTEGER | No | - | No | 评论内容id |
| user_id | INTEGER | No | - | No | 评论用户id |
| content | VARCHAR(1000) | No | - | No | 内容 |

> **Indexes**

|名称|字段|类型|
|:--:|:--:|:--:|
| content_id | content_id | Normal |
| user_id | user_id | Normal |

> **Foreign Key**

|名称|外键表|外键表字段|
|:--:|:--:|:--:|
| content_id | contents | id |
| user_id | users | id |

### 点赞表
> **Table: likes**

|名称|类型|允许空|默认值|主键|说明|
|:-:|:--:|:----:|:---:|:--:|:--:|
| id | INTEGER | No | - | Yes | 点赞id |
| content_id | INTEGER | No | - | No | 点赞内容id |
| user_id | INTEGER | No | - | No | 点赞用户id |

> **Indexes**

|名称|字段|类型|
|:--:|:--:|:--:|
| content_id | content_id | Normal |
| user_id | user_id | Normal |

> **Foreign Key**

|名称|外键表|外键表字段|
|:--:|:--:|:--:|
| content_id | contents | id |
| user_id | users | id |