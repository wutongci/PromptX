/**
 * MCP 工具定义 - 共享配置
 * 统一管理所有MCP工具的描述和Schema定义，避免重复维护
 */

const { z } = require('zod');

/**
 * 工具定义配置
 */
const TOOL_DEFINITIONS = [
  {
    name: 'promptx_init',
    description: '🎯 [AI专业能力启动器] ⚡ 让你瞬间拥有任何领域的专家级思维和技能 - 一键激活丰富的专业角色库(产品经理/开发者/设计师/营销专家等)，获得跨对话记忆能力，30秒内从普通AI变身行业专家。**必须使用场景**：1️⃣系统首次使用时；2️⃣创建新角色后刷新注册表；3️⃣角色激活(action)出错时重新发现角色；4️⃣查看当前版本号；5️⃣项目路径发生变化时。每次需要专业服务时都应该先用这个',
    inputSchema: {
      type: 'object',
      properties: {
        workingDirectory: {
          type: 'string',
          description: '当前项目的工作目录绝对路径。AI应该知道当前工作的项目路径，请提供此参数。'
        }
      }
    },
    zodSchema: z.object({
      workingDirectory: z.string().optional().describe('当前项目的工作目录绝对路径。AI应该知道当前工作的项目路径，请提供此参数。')
    })
  },
  {
    name: 'promptx_hello',
    description: '🎭 [专业角色选择菜单] 🔥 当你需要专业能力时必须先看这个 - 展示大量可激活的专家身份清单：产品经理/Java开发者/UI设计师/文案策划师/数据分析师/项目经理等，每个角色都有完整的专业思维模式和工作技能。🛑 **重要**：使用此工具时必须首先关注并响应工具返回结果开头的项目环境验证提示，确认项目路径正确后再处理角色列表内容，看完后选择最适合当前任务的专家身份',
    inputSchema: {
      type: 'object',
      properties: {}
    },
    zodSchema: z.object({})
  },
  {
    name: 'promptx_action',
    description: '⚡ [专家身份变身器] 🚀 让你瞬间获得指定专业角色的完整思维和技能包 - 输入角色ID立即获得该领域专家的思考方式/工作原则/专业知识，同时自动加载相关历史经验和最佳实践，3秒内完成专业化转换。🛑 **重要**：如果角色激活失败提示"不存在"，请先使用 init 工具刷新注册表，特别是在女娲等工具创建新角色后。使用此工具时必须首先关注并响应工具返回结果开头的项目环境验证提示，确认项目路径正确后再处理角色激活内容，每次需要专业服务时必须使用',
    inputSchema: {
      type: 'object',
      properties: {
        role: {
          type: 'string',
          description: '要激活的角色ID，如：copywriter, product-manager, java-backend-developer'
        }
      },
      required: ['role']
    },
    zodSchema: z.object({
      role: z.string().describe('要激活的角色ID，如：copywriter, product-manager, java-backend-developer')
    })
  },
  {
    name: 'promptx_learn',
    description: '🧠 [专业技能学习器] 💎 让你快速掌握特定专业技能和思维方式 - 学习创意思维/最佳实践/敏捷开发/产品设计等专业能力，支持thought://(思维模式) execution://(执行技能) knowledge://(专业知识)三种学习类型。🛑 **重要**：使用此工具时必须首先关注并响应工具返回结果开头的项目环境验证提示，确认项目路径正确后再处理学习内容，学会后立即可以运用到工作中，想要专业化成长时使用',
    inputSchema: {
      type: 'object',
      properties: {
        resource: {
          type: 'string',
          description: '资源URL，支持格式：thought://creativity, execution://best-practice, knowledge://scrum'
        }
      },
      required: ['resource']
    },
    zodSchema: z.object({
      resource: z.string().describe('资源URL，支持格式：thought://creativity, execution://best-practice, knowledge://scrum')
    })
  },
  {
    name: 'promptx_recall',
    description: '🔍 [记忆回想器] ⚡ 让你记住并运用以前的经验和知识 - 瞬间检索之前学会的专业技能/处理过的项目经验/掌握的最佳实践/解决过的问题方案，避免重复犯错和重新学习，当需要参考历史经验做决策时必须使用，让你的工作越来越专业',
    inputSchema: {
      type: 'object',
      properties: {
        random_string: {
          type: 'string',
          description: 'Dummy parameter for no-parameter tools'
        },
        query: {
          type: 'string',
          description: '检索关键词或描述，可选参数，不提供则返回所有记忆'
        }
      },
      required: ['random_string']
    },
    zodSchema: z.object({
      query: z.string().optional().describe('检索关键词或描述，可选参数，不提供则返回所有记忆')
    })
  },
  {
    name: 'promptx_remember',
    description: '💾 [经验记忆存储器] 🧠 让你永久记住重要的经验和知识 - 将有价值的经验/学到的最佳实践/项目解决方案/工作心得保存到长期记忆中，下次遇到类似问题时可以快速回想起来，让你越来越聪明和专业，每次获得重要经验时都应该存储',
    inputSchema: {
      type: 'object',
      properties: {
        content: {
          type: 'string',
          description: '要保存的重要信息或经验'
        },
        tags: {
          type: 'string',
          description: '自定义标签，用空格分隔，可选'
        }
      },
      required: ['content']
    },
    zodSchema: z.object({
      content: z.string().describe('要保存的重要信息或经验'),
      tags: z.string().optional().describe('自定义标签，用空格分隔，可选')
    })
  }
];

/**
 * 获取所有工具定义 - 用于MCP Server
 */
function getToolDefinitions() {
  return TOOL_DEFINITIONS.map(tool => ({
    name: tool.name,
    description: tool.description,
    inputSchema: tool.inputSchema
  }));
}

/**
 * 获取指定工具的定义
 */
function getToolDefinition(toolName) {
  return TOOL_DEFINITIONS.find(tool => tool.name === toolName);
}

/**
 * 获取工具的Zod Schema - 用于HTTP Server
 */
function getToolZodSchema(toolName) {
  const tool = getToolDefinition(toolName);
  return tool ? tool.zodSchema : null;
}

/**
 * 获取所有工具名称
 */
function getToolNames() {
  return TOOL_DEFINITIONS.map(tool => tool.name);
}

module.exports = {
  TOOL_DEFINITIONS,
  getToolDefinitions,
  getToolDefinition,
  getToolZodSchema,
  getToolNames
}; 