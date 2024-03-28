// src/llm/OpenRouter_infos.ts
var openRouterInfos = {
  "openrouter/auto": {
    id: "openrouter/auto",
    name: "Auto (best for prompt)",
    pricing: { prompt: "-1", completion: "-1" },
    context_length: 128e3,
    architecture: { tokenizer: "Router", instruct_type: null },
    top_provider: { max_completion_tokens: null },
    per_request_limits: null
  },
  "mistralai/mistral-7b-instruct": {
    id: "mistralai/mistral-7b-instruct",
    name: "Mistral 7B Instruct",
    pricing: { prompt: "0", completion: "0" },
    context_length: 8192,
    architecture: { tokenizer: "Mistral", instruct_type: "llama2" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "Infinity", completion_tokens: "Infinity" }
  },
  "mistralai/mixtral-8x7b-instruct": {
    id: "mistralai/mixtral-8x7b-instruct",
    name: "Mistral 8x7b",
    pricing: { prompt: "0", completion: "0" },
    context_length: 32e3,
    architecture: { tokenizer: "Mistral", instruct_type: "llama2" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "Infinity", completion_tokens: "Infinity" }
  },
  "mistralai/mistral-large": {
    id: "mistralai/mistral-large",
    name: "Mistral Large",
    pricing: { prompt: "0", completion: "0" },
    context_length: 32e3,
    architecture: { tokenizer: "Mistral", instruct_type: "llama2" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "Infinity", completion_tokens: "Infinity" }
  },
  "huggingfaceh4/zephyr-7b-beta": {
    id: "huggingfaceh4/zephyr-7b-beta",
    name: "Hugging Face: Zephyr 7B",
    pricing: { prompt: "0", completion: "0" },
    context_length: 4096,
    architecture: { tokenizer: "Mistral", instruct_type: "zephyr" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "Infinity", completion_tokens: "Infinity" }
  },
  "openchat/openchat-7b": {
    id: "openchat/openchat-7b",
    name: "OpenChat 3.5",
    pricing: { prompt: "0", completion: "0" },
    context_length: 8192,
    architecture: { tokenizer: "Mistral", instruct_type: "openchat" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "Infinity", completion_tokens: "Infinity" }
  },
  "undi95/toppy-m-7b": {
    id: "undi95/toppy-m-7b",
    name: "Toppy M 7B",
    pricing: { prompt: "0", completion: "0" },
    context_length: 32768,
    architecture: { tokenizer: "Mistral", instruct_type: "alpaca" },
    top_provider: { max_completion_tokens: 2048 },
    per_request_limits: { prompt_tokens: "Infinity", completion_tokens: "Infinity" }
  },
  "gryphe/mythomist-7b": {
    id: "gryphe/mythomist-7b",
    name: "MythoMist 7B",
    pricing: { prompt: "0", completion: "0" },
    context_length: 32768,
    architecture: { tokenizer: "Mistral", instruct_type: "alpaca" },
    top_provider: { max_completion_tokens: 2048 },
    per_request_limits: { prompt_tokens: "Infinity", completion_tokens: "Infinity" }
  },
  "nousresearch/nous-capybara-34b": {
    id: "nousresearch/nous-capybara-34b",
    name: "Nous: Capybara 34B",
    pricing: { prompt: "0.000002", completion: "0.000002" },
    context_length: 32e3,
    architecture: { tokenizer: "Llama2", instruct_type: "vicuna" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "1569799", completion_tokens: "1569799" }
  },
  "jebcarter/psyfighter-13b": {
    id: "jebcarter/psyfighter-13b",
    name: "Psyfighter 13B",
    pricing: { prompt: "0.000001", completion: "0.000001" },
    context_length: 4096,
    architecture: { tokenizer: "Llama2", instruct_type: "alpaca" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "3139598", completion_tokens: "3139598" }
  },
  "nousresearch/nous-hermes-llama2-13b": {
    id: "nousresearch/nous-hermes-llama2-13b",
    name: "Nous: Hermes 13B",
    pricing: { prompt: "0.00000015", completion: "0.00000015" },
    context_length: 4096,
    architecture: { tokenizer: "Llama2", instruct_type: "alpaca" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "20930657", completion_tokens: "20930657" }
  },
  "phind/phind-codellama-34b": {
    id: "phind/phind-codellama-34b",
    name: "Phind: CodeLlama 34B v2",
    pricing: { prompt: "0.0000004", completion: "0.0000004" },
    context_length: 4096,
    architecture: { tokenizer: "Llama2", instruct_type: "alpaca" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "7848996", completion_tokens: "7848996" }
  },
  "intel/neural-chat-7b": {
    id: "intel/neural-chat-7b",
    name: "Neural Chat 7B v3.1",
    pricing: { prompt: "0.000005", completion: "0.000005" },
    context_length: 4096,
    architecture: { tokenizer: "Mistral", instruct_type: "neural" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "627919", completion_tokens: "627919" }
  },
  "haotian-liu/llava-13b": {
    id: "haotian-liu/llava-13b",
    name: "Llava 13B",
    pricing: { prompt: "0.000005", completion: "0.000005" },
    context_length: 2048,
    architecture: { tokenizer: "Llama2", instruct_type: null },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "627919", completion_tokens: "627919" }
  },
  "meta-llama/llama-2-13b-chat": {
    id: "meta-llama/llama-2-13b-chat",
    name: "Meta: Llama v2 13B Chat",
    pricing: { prompt: "0.0000002345", completion: "0.0000002345" },
    context_length: 4096,
    architecture: { tokenizer: "Llama2", instruct_type: "llama2" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "13388480", completion_tokens: "13388480" }
  },
  "alpindale/goliath-120b": {
    id: "alpindale/goliath-120b",
    name: "Goliath 120B",
    pricing: { prompt: "0.00000703125", completion: "0.00000703125" },
    context_length: 6144,
    architecture: { tokenizer: "Llama2", instruct_type: "vicuna" },
    top_provider: { max_completion_tokens: 300 },
    per_request_limits: { prompt_tokens: "446520", completion_tokens: "446520" }
  },
  "lizpreciatior/lzlv-70b-fp16-hf": {
    id: "lizpreciatior/lzlv-70b-fp16-hf",
    name: "lzlv 70B",
    pricing: { prompt: "0.00000056", completion: "0.00000076" },
    context_length: 4096,
    architecture: { tokenizer: "Llama2", instruct_type: "vicuna" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "5606426", completion_tokens: "4131050" }
  },
  "openai/gpt-3.5-turbo": {
    id: "openai/gpt-3.5-turbo",
    name: "OpenAI: GPT-3.5 Turbo",
    pricing: { prompt: "0.000001", completion: "0.000002" },
    context_length: 4095,
    architecture: { tokenizer: "GPT", instruct_type: null },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "3139598", completion_tokens: "1569799" }
  },
  "openai/gpt-3.5-turbo-1106": {
    id: "openai/gpt-3.5-turbo-1106",
    name: "OpenAI: GPT-3.5 Turbo 16k (preview)",
    pricing: { prompt: "0.000001", completion: "0.000002" },
    context_length: 16385,
    architecture: { tokenizer: "GPT", instruct_type: null },
    top_provider: { max_completion_tokens: 4096 },
    per_request_limits: { prompt_tokens: "3139598", completion_tokens: "1569799" }
  },
  "openai/gpt-3.5-turbo-0301": {
    id: "openai/gpt-3.5-turbo-0301",
    name: "OpenAI: GPT-3.5 Turbo (older v0301)",
    pricing: { prompt: "0.000001", completion: "0.000002" },
    context_length: 4095,
    architecture: { tokenizer: "GPT", instruct_type: null },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "3139598", completion_tokens: "1569799" }
  },
  "openai/gpt-3.5-turbo-16k": {
    id: "openai/gpt-3.5-turbo-16k",
    name: "OpenAI: GPT-3.5 Turbo 16k",
    pricing: { prompt: "0.000003", completion: "0.000004" },
    context_length: 16385,
    architecture: { tokenizer: "GPT", instruct_type: null },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "1046532", completion_tokens: "784899" }
  },
  "openai/gpt-4-1106-preview": {
    id: "openai/gpt-4-1106-preview",
    name: "OpenAI: GPT-4 Turbo (preview)",
    pricing: { prompt: "0.00001", completion: "0.00003" },
    context_length: 128e3,
    architecture: { tokenizer: "GPT", instruct_type: null },
    top_provider: { max_completion_tokens: 4096 },
    per_request_limits: { prompt_tokens: "313959", completion_tokens: "104653" }
  },
  "openai/gpt-4": {
    id: "openai/gpt-4",
    name: "OpenAI: GPT-4",
    pricing: { prompt: "0.00003", completion: "0.00006" },
    context_length: 8191,
    architecture: { tokenizer: "GPT", instruct_type: null },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "104653", completion_tokens: "52326" }
  },
  "openai/gpt-4-0314": {
    id: "openai/gpt-4-0314",
    name: "OpenAI: GPT-4 (older v0314)",
    pricing: { prompt: "0.00003", completion: "0.00006" },
    context_length: 8191,
    architecture: { tokenizer: "GPT", instruct_type: null },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "104653", completion_tokens: "52326" }
  },
  "openai/gpt-4-32k": {
    id: "openai/gpt-4-32k",
    name: "OpenAI: GPT-4 32k",
    pricing: { prompt: "0.00006", completion: "0.00012" },
    context_length: 32767,
    architecture: { tokenizer: "GPT", instruct_type: null },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "52326", completion_tokens: "26163" }
  },
  "openai/gpt-4-32k-0314": {
    id: "openai/gpt-4-32k-0314",
    name: "OpenAI: GPT-4 32k (older v0314)",
    pricing: { prompt: "0.00006", completion: "0.00012" },
    context_length: 32767,
    architecture: { tokenizer: "GPT", instruct_type: null },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "52326", completion_tokens: "26163" }
  },
  "openai/gpt-4-vision-preview": {
    id: "openai/gpt-4-vision-preview",
    name: "OpenAI: GPT-4 Vision (preview)",
    pricing: { prompt: "0.00001", completion: "0.00003" },
    context_length: 128e3,
    architecture: { tokenizer: "GPT", instruct_type: null },
    top_provider: { max_completion_tokens: 4096 },
    per_request_limits: { prompt_tokens: "313959", completion_tokens: "104653" }
  },
  "openai/text-davinci-002": {
    id: "openai/text-davinci-002",
    name: "OpenAI: Davinci 2",
    pricing: { prompt: "0.00002", completion: "0.00002" },
    context_length: 4095,
    architecture: { tokenizer: "GPT", instruct_type: "gpt" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "156979", completion_tokens: "156979" }
  },
  "openai/gpt-3.5-turbo-instruct": {
    id: "openai/gpt-3.5-turbo-instruct",
    name: "OpenAI: GPT-3.5 Turbo Instruct",
    pricing: { prompt: "0.0000015", completion: "0.000002" },
    context_length: 4095,
    architecture: { tokenizer: "GPT", instruct_type: "gpt" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "2093065", completion_tokens: "1569799" }
  },
  "google/palm-2-chat-bison": {
    id: "google/palm-2-chat-bison",
    name: "Google: PaLM 2 Chat",
    pricing: { prompt: "0.0000005", completion: "0.0000005" },
    context_length: 9216,
    architecture: { tokenizer: "PaLM", instruct_type: null },
    top_provider: { max_completion_tokens: 1024 },
    per_request_limits: { prompt_tokens: "6279197", completion_tokens: "6279197" }
  },
  "google/palm-2-codechat-bison": {
    id: "google/palm-2-codechat-bison",
    name: "Google: PaLM 2 Code Chat",
    pricing: { prompt: "0.0000005", completion: "0.0000005" },
    context_length: 7168,
    architecture: { tokenizer: "PaLM", instruct_type: null },
    top_provider: { max_completion_tokens: 1024 },
    per_request_limits: { prompt_tokens: "6279197", completion_tokens: "6279197" }
  },
  "google/palm-2-chat-bison-32k": {
    id: "google/palm-2-chat-bison-32k",
    name: "Google: PaLM 2 Chat 32k",
    pricing: { prompt: "0.0000005", completion: "0.0000005" },
    context_length: 32e3,
    architecture: { tokenizer: "PaLM", instruct_type: null },
    top_provider: { max_completion_tokens: 8192 },
    per_request_limits: { prompt_tokens: "6279197", completion_tokens: "6279197" }
  },
  "google/palm-2-codechat-bison-32k": {
    id: "google/palm-2-codechat-bison-32k",
    name: "Google: PaLM 2 Code Chat 32k",
    pricing: { prompt: "0.0000005", completion: "0.0000005" },
    context_length: 32e3,
    architecture: { tokenizer: "PaLM", instruct_type: null },
    top_provider: { max_completion_tokens: 8192 },
    per_request_limits: { prompt_tokens: "6279197", completion_tokens: "6279197" }
  },
  "perplexity/pplx-70b-online": {
    id: "perplexity/pplx-70b-online",
    name: "Perplexity: PPLX 70B Online",
    pricing: { prompt: "0", completion: "0.0000028" },
    context_length: 4096,
    architecture: { tokenizer: "Llama2", instruct_type: null },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "Infinity", completion_tokens: "Infinity" }
  },
  "perplexity/pplx-7b-online": {
    id: "perplexity/pplx-7b-online",
    name: "Perplexity: PPLX 7B Online",
    pricing: { prompt: "0", completion: "0.00000028" },
    context_length: 4096,
    architecture: { tokenizer: "Llama2", instruct_type: null },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "Infinity", completion_tokens: "Infinity" }
  },
  "perplexity/pplx-7b-chat": {
    id: "perplexity/pplx-7b-chat",
    name: "Perplexity: PPLX 7B Chat",
    pricing: { prompt: "0.00000007", completion: "0.00000028" },
    context_length: 8192,
    architecture: { tokenizer: "Llama2", instruct_type: null },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "44851408", completion_tokens: "11212852" }
  },
  "perplexity/pplx-70b-chat": {
    id: "perplexity/pplx-70b-chat",
    name: "Perplexity: PPLX 70B Chat",
    pricing: { prompt: "0.0000007", completion: "0.0000028" },
    context_length: 4096,
    architecture: { tokenizer: "Llama2", instruct_type: null },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "4485140", completion_tokens: "1121285" }
  },
  "meta-llama/llama-2-70b-chat": {
    id: "meta-llama/llama-2-70b-chat",
    name: "Meta: Llama v2 70B Chat",
    pricing: { prompt: "0.0000007", completion: "0.00000095" },
    context_length: 4096,
    architecture: { tokenizer: "Llama2", instruct_type: "llama2" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "4485140", completion_tokens: "3304840" }
  },
  "nousresearch/nous-hermes-llama2-70b": {
    id: "nousresearch/nous-hermes-llama2-70b",
    name: "Nous: Hermes 70B",
    pricing: { prompt: "0.0000009", completion: "0.0000009" },
    context_length: 4096,
    architecture: { tokenizer: "Llama2", instruct_type: "alpaca" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "3488442", completion_tokens: "3488442" }
  },
  "meta-llama/codellama-34b-instruct": {
    id: "meta-llama/codellama-34b-instruct",
    name: "Meta: CodeLlama 34B Instruct",
    pricing: { prompt: "0.00000035", completion: "0.0000014" },
    context_length: 16384,
    architecture: { tokenizer: "Llama2", instruct_type: "llama2" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "8970281", completion_tokens: "2242570" }
  },
  "jondurbin/airoboros-l2-70b": {
    id: "jondurbin/airoboros-l2-70b",
    name: "Airoboros 70B",
    pricing: { prompt: "0.0000007", completion: "0.00000095" },
    context_length: 4096,
    architecture: { tokenizer: "Llama2", instruct_type: "airoboros" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "4485140", completion_tokens: "3304840" }
  },
  "migtissera/synthia-70b": {
    id: "migtissera/synthia-70b",
    name: "Synthia 70B",
    pricing: { prompt: "0.0000065625", completion: "0.0000065625" },
    context_length: 8192,
    architecture: { tokenizer: "Llama2", instruct_type: "vicuna" },
    top_provider: { max_completion_tokens: 300 },
    per_request_limits: { prompt_tokens: "478415", completion_tokens: "478415" }
  },
  "open-orca/mistral-7b-openorca": {
    id: "open-orca/mistral-7b-openorca",
    name: "Mistral OpenOrca 7B",
    pricing: { prompt: "0.0000002", completion: "0.0000002" },
    context_length: 8192,
    architecture: { tokenizer: "Mistral", instruct_type: "gpt" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "15697993", completion_tokens: "15697993" }
  },
  "teknium/openhermes-2-mistral-7b": {
    id: "teknium/openhermes-2-mistral-7b",
    name: "OpenHermes 2 Mistral 7B",
    pricing: { prompt: "0.0000002", completion: "0.0000002" },
    context_length: 4096,
    architecture: { tokenizer: "Mistral", instruct_type: "gpt" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "15697993", completion_tokens: "15697993" }
  },
  "teknium/openhermes-2.5-mistral-7b": {
    id: "teknium/openhermes-2.5-mistral-7b",
    name: "OpenHermes 2.5 Mistral 7B",
    pricing: { prompt: "0.0000002", completion: "0.0000002" },
    context_length: 4096,
    architecture: { tokenizer: "Mistral", instruct_type: "gpt" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "15697993", completion_tokens: "15697993" }
  },
  "pygmalionai/mythalion-13b": {
    id: "pygmalionai/mythalion-13b",
    name: "Pygmalion: Mythalion 13B",
    pricing: { prompt: "0.000001125", completion: "0.000001125" },
    context_length: 8192,
    architecture: { tokenizer: "Llama2", instruct_type: "alpaca" },
    top_provider: { max_completion_tokens: 250 },
    per_request_limits: { prompt_tokens: "2790754", completion_tokens: "2790754" }
  },
  "undi95/remm-slerp-l2-13b": {
    id: "undi95/remm-slerp-l2-13b",
    name: "ReMM SLERP 13B",
    pricing: { prompt: "0.000001125", completion: "0.000001125" },
    context_length: 6144,
    architecture: { tokenizer: "Llama2", instruct_type: "alpaca" },
    top_provider: { max_completion_tokens: 250 },
    per_request_limits: { prompt_tokens: "2790754", completion_tokens: "2790754" }
  },
  "xwin-lm/xwin-lm-70b": {
    id: "xwin-lm/xwin-lm-70b",
    name: "Xwin 70B",
    pricing: { prompt: "0.0000065625", completion: "0.0000065625" },
    context_length: 8192,
    architecture: { tokenizer: "Llama2", instruct_type: "vicuna" },
    top_provider: { max_completion_tokens: 300 },
    per_request_limits: { prompt_tokens: "478415", completion_tokens: "478415" }
  },
  "gryphe/mythomax-l2-13b-8k": {
    id: "gryphe/mythomax-l2-13b-8k",
    name: "MythoMax 13B 8k",
    pricing: { prompt: "0.000001125", completion: "0.000001125" },
    context_length: 8192,
    architecture: { tokenizer: "Llama2", instruct_type: "alpaca" },
    top_provider: { max_completion_tokens: 250 },
    per_request_limits: { prompt_tokens: "2790754", completion_tokens: "2790754" }
  },
  "neversleep/noromaid-20b": {
    id: "neversleep/noromaid-20b",
    name: "Noromaid 20B",
    pricing: { prompt: "0.00000225", completion: "0.00000225" },
    context_length: 8192,
    architecture: { tokenizer: "Llama2", instruct_type: "alpaca" },
    top_provider: { max_completion_tokens: 300 },
    per_request_limits: { prompt_tokens: "1395377", completion_tokens: "1395377" }
  },
  "anthropic/claude-2": {
    id: "anthropic/claude-2",
    name: "Anthropic: Claude v2.1",
    pricing: { prompt: "0.000008", completion: "0.000024" },
    context_length: 2e5,
    architecture: { tokenizer: "Claude", instruct_type: "claude" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "392449", completion_tokens: "130816" }
  },
  "anthropic/claude-2.0": {
    id: "anthropic/claude-2.0",
    name: "Anthropic: Claude v2.0",
    pricing: { prompt: "0.000008", completion: "0.000024" },
    context_length: 1e5,
    architecture: { tokenizer: "Claude", instruct_type: "claude" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "392449", completion_tokens: "130816" }
  },
  "anthropic/claude-instant-v1": {
    id: "anthropic/claude-instant-v1",
    name: "Anthropic: Claude Instant v1",
    pricing: { prompt: "0.00000163", completion: "0.00000551" },
    context_length: 1e5,
    architecture: { tokenizer: "Claude", instruct_type: "claude" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "1926134", completion_tokens: "569800" }
  },
  "anthropic/claude-v1": {
    id: "anthropic/claude-v1",
    name: "Anthropic: Claude v1",
    pricing: { prompt: "0.000008", completion: "0.000024" },
    context_length: 9e3,
    architecture: { tokenizer: "Claude", instruct_type: "claude" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "392449", completion_tokens: "130816" }
  },
  "anthropic/claude-1.2": {
    id: "anthropic/claude-1.2",
    name: "Anthropic: Claude (older v1)",
    pricing: { prompt: "0.000008", completion: "0.000024" },
    context_length: 9e3,
    architecture: { tokenizer: "Claude", instruct_type: "claude" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "392449", completion_tokens: "130816" }
  },
  "anthropic/claude-instant-v1-100k": {
    id: "anthropic/claude-instant-v1-100k",
    name: "Anthropic: Claude Instant 100k v1",
    pricing: { prompt: "0.00000163", completion: "0.00000551" },
    context_length: 1e5,
    architecture: { tokenizer: "Claude", instruct_type: "claude" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "1926134", completion_tokens: "569800" }
  },
  "anthropic/claude-v1-100k": {
    id: "anthropic/claude-v1-100k",
    name: "Anthropic: Claude 100k v1",
    pricing: { prompt: "0.000008", completion: "0.000024" },
    context_length: 1e5,
    architecture: { tokenizer: "Claude", instruct_type: "claude" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "392449", completion_tokens: "130816" }
  },
  "anthropic/claude-instant-1.0": {
    id: "anthropic/claude-instant-1.0",
    name: "Anthropic: Claude Instant (older v1)",
    pricing: { prompt: "0.00000163", completion: "0.00000551" },
    context_length: 9e3,
    architecture: { tokenizer: "Claude", instruct_type: "claude" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "1926134", completion_tokens: "569800" }
  },
  "mancer/weaver": {
    id: "mancer/weaver",
    name: "Mancer: Weaver (alpha)",
    pricing: { prompt: "0.0000045", completion: "0.0000045" },
    context_length: 8e3,
    architecture: { tokenizer: "Llama2", instruct_type: "alpaca" },
    top_provider: { max_completion_tokens: 350 },
    per_request_limits: { prompt_tokens: "697688", completion_tokens: "697688" }
  },
  "gryphe/mythomax-l2-13b": {
    id: "gryphe/mythomax-l2-13b",
    name: "MythoMax 13B",
    pricing: { prompt: "0.0000006", completion: "0.0000006" },
    context_length: 4096,
    architecture: { tokenizer: "Llama2", instruct_type: "alpaca" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "5232664", completion_tokens: "5232664" }
  }
};

// src/utils/misc/_FIX_INDENTATION.ts
var _FIX_INDENTATION = (str) => {
  if (str.length === 0)
    return "";
  let lines = str[0].split("\n").slice(1);
  const indent = (lines[0] ?? "").match(/^\s*/)[0].length;
  lines = lines.map((line) => line.slice(indent));
  return lines.join("\n");
};

// src/utils/misc/debounce.ts
function debounce(func, delay, maxWait) {
  let timeoutId = null;
  let lastInvokeTime = Date.now();
  return (...args) => {
    const now = Date.now();
    const needInvoke = maxWait !== void 0 && now - lastInvokeTime >= maxWait;
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    if (needInvoke) {
      func(...args);
      lastInvokeTime = now;
    } else {
      timeoutId = setTimeout(() => {
        func(...args);
        lastInvokeTime = Date.now();
      }, delay);
    }
  };
}

// src/utils/misc/makeLabelFromFieldName.tsx
function makeLabelFromFieldName(s) {
  if (typeof s !== "string") {
    console.log(`[\u{1F534}] makeLabelFromFieldName: expected string, got ${typeof s} (${s})`);
  }
  if (s == null)
    return "";
  if (s.length === 0)
    return s;
  s = s.replace(/([a-z])([A-Z])/g, "$1 $2");
  s = s.replace(/([A-Z])([A-Z][a-z])/g, "$1 $2");
  s = s.replace(/_/g, " ");
  s = s.replace(/([a-z])([A-Z])/g, "$1 $2");
  s = s.replace(/([A-Z])([A-Z][a-z])/g, "$1 $2");
  return s[0].toUpperCase() + s.slice(1);
}

// src/widgets/workspace/JsonViewUI.tsx
import JsonView from "@uiw/react-json-view";
import { observer } from "mobx-react-lite";

// src/utils/custom-jsx/jsx-runtime.js
import { Fragment } from "react/jsx-runtime";
import { jsx as jsx_, jsxs as jsxs_ } from "react/jsx-runtime";
var joinCls = (tw) => {
  if (typeof tw === "string")
    return tw;
  if (Array.isArray(tw)) {
    const out = [];
    for (const arg of tw) {
      if (arg == null)
        continue;
      if (typeof arg === "string")
        out.push(arg);
      if (typeof arg === "object") {
        for (const key of Object.keys(arg)) {
          if (arg[key])
            out.push(key);
        }
      }
    }
    return out.join(" ");
  }
  return "";
};
function jsx(type, props, key) {
  if (!hasOwnProperty.call(props, "tw"))
    return jsx_(type, props, key);
  let className = props.className ?? "";
  if (props.tw)
    className += " " + joinCls(props.tw);
  const newProps = { ...props, className, tw: void 0 };
  return jsx_(type, newProps, key);
}
function jsxs(type, props, key) {
  if (!hasOwnProperty.call(props, "tw"))
    return jsxs_(type, props, key);
  let className = props.className ?? "";
  if (props.tw)
    className += " " + joinCls(props.tw);
  const newProps = { ...props, className, tw: void 0 };
  return jsxs_(type, newProps, key);
}

// src/widgets/workspace/JsonViewUI.tsx
var JsonViewUI = observer(function JsonViewUI_(p) {
  JSON.stringify(p.value);
  return /* @__PURE__ */ jsx(
    JsonView,
    {
      shortenTextAfterLength: 100,
      style: _githubDarkTheme,
      value: p.value ?? {},
      enableClipboard: false
    }
  );
});
var _githubDarkTheme = {
  "--w-rjv-font-family": "monospace",
  "--w-rjv-color": "#79c0ff",
  "--w-rjv-key-string": "#79c0ff",
  "--w-rjv-background-color": "#0d1117",
  "--w-rjv-line-color": "#94949480",
  "--w-rjv-arrow-color": "#ccc",
  "--w-rjv-edit-color": "var(--w-rjv-color)",
  "--w-rjv-info-color": "#7b7b7b",
  "--w-rjv-update-color": "#ebcb8b",
  "--w-rjv-copied-color": "#79c0ff",
  "--w-rjv-copied-success-color": "#28a745",
  "--w-rjv-curlybraces-color": "#8b949e",
  "--w-rjv-colon-color": "#c9d1d9",
  "--w-rjv-brackets-color": "#8b949e",
  "--w-rjv-quotes-color": "var(--w-rjv-key-string)",
  "--w-rjv-quotes-string-color": "var(--w-rjv-type-string-color)",
  "--w-rjv-type-string-color": "#a5d6ff",
  "--w-rjv-type-int-color": "#79c0ff",
  "--w-rjv-type-float-color": "#79c0ff",
  "--w-rjv-type-bigint-color": "#79c0ff",
  "--w-rjv-type-boolean-color": "#ffab70",
  "--w-rjv-type-date-color": "#79c0ff",
  "--w-rjv-type-url-color": "#4facff",
  "--w-rjv-type-null-color": "#ff7b72",
  "--w-rjv-type-nan-color": "#859900",
  "--w-rjv-type-undefined-color": "#79c0ff"
};

// src/widgets/misc/ErrorBoundary.tsx
var ErrorBoundaryFallback = (p) => {
  return /* @__PURE__ */ jsxs("div", { role: "alert", children: [
    /* @__PURE__ */ jsxs("p", { tw: "flex gap-2 items-center", children: [
      /* @__PURE__ */ jsx("span", { onClick: () => p.resetErrorBoundary(), tw: "btn btn-square btn-sm btn-error rounded", children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "refresh" }) }),
      "Something went wrong:"
    ] }),
    /* @__PURE__ */ jsx("pre", { style: { color: "red" }, children: p.error?.message }),
    p.error.extraJSON && /* @__PURE__ */ jsx(JsonViewUI, { value: p.error.extraJSON }),
    p.error?.stack && typeof p.error.stack === "string" && /* @__PURE__ */ jsx("pre", { tw: "text-sm", children: p.error.stack.split("\n").map((line, i) => /* @__PURE__ */ jsx("div", { children: line }, i)) })
  ] });
};

// src/utils/misc/bang.ts
var bang = (x, msg = "") => {
  if (x == null) {
    console.error(`[\u{1F534}] BANG FAILED`, msg);
    throw new Error("bang: " + (msg ?? "no message"));
  }
  return x;
};
function ASSERT_ARRAY(a) {
  if (!Array.isArray(a))
    throw new Error("\u274C not an array");
  return true;
}
function ASSERT_EQUAL(a, b) {
  if (a !== b)
    throw new Error("\u274C not equal");
  return true;
}
function ASSERT_STRING(a) {
  if (typeof a !== "string")
    throw new Error("\u274C not a string");
  return true;
}
function asSTRING_orCrash(a, errMsg = "\u274C not a string") {
  if (typeof a !== "string")
    throw new Error(errMsg);
  return a;
}

// src/controls/utils/useSizeOf.tsx
import { runInAction } from "mobx";
import { useLocalObservable } from "mobx-react-lite";
var useSizeOf = () => {
  const size = useLocalObservable(
    () => ({
      observer: new ResizeObserver((e, obs) => {
        const e0 = bang(e[0]);
        runInAction(() => {
          const width = e0.contentRect.width;
          const height = e0.contentRect.height;
          size.width = width;
          size.height = height;
        });
      }),
      width: void 0,
      height: void 0
    })
  );
  const ro = size.observer;
  const refFn = (e) => {
    if (e == null)
      return ro.disconnect();
    ro.observe(e);
  };
  return { refFn, size };
};

// src/controls/utils/AnimatedSizeUI.tsx
import { observer as observer2 } from "mobx-react-lite";
var AnimatedSizeUI = observer2(function AnimatedSizeUI_(p) {
  const { refFn, size } = useSizeOf();
  return /* @__PURE__ */ jsx("div", { className: p.className, tw: "animated overflow-hidden", style: { height: `${size.height}px` }, children: /* @__PURE__ */ jsx("div", { ref: refFn, children: p.children }) });
});

// src/controls/widgets/WidgetUI.DI.ts
var WidgetDI = {};
var getWidgetClass = (widgetName) => {
  return WidgetDI[widgetName];
};
var registerWidgetClass = (type, kls) => {
  WidgetDI[type] = kls;
};
var isWidgetOptional = (widget) => widget.type === "optional";
var isWidgetShared = (widget) => widget.type === "shared";
var isWidgetGroup = (widget) => widget.type === "group";

// src/controls/shared/getActualWidgetToDisplay.tsx
function getActualWidgetToDisplay(originalWidget) {
  if (isWidgetOptional(originalWidget))
    return getActualWidgetToDisplay(originalWidget.child);
  if (isWidgetShared(originalWidget))
    return getActualWidgetToDisplay(originalWidget.shared);
  return originalWidget;
}

// src/controls/shared/getBorderStatusForWidget.ts
var getBorderStatusForWidget = (widget) => {
  if (widget.config.border != null)
    return widget.config.border;
  if (widget.border != null)
    return widget.border;
  if (widget.DefaultBodyUI == null)
    return false;
  return true;
};

// src/controls/shared/getIfWidgetIsCollapsible.tsx
var getIfWidgetIsCollapsible = (widget) => {
  if (widget.config.collapsed != null)
    return widget.config.collapsed;
  if (!widget.DefaultBodyUI)
    return false;
  if (widget.config.label === false)
    return false;
  return true;
};

// src/controls/shared/getIfWidgetNeedAlignedLabel.tsx
var getIfWidgetNeedAlignedLabel = (widget) => {
  if (widget.config.alignLabel != null)
    return widget.config.alignLabel;
  if (widget.alignLabel != null)
    return widget.alignLabel;
  if (widget.DefaultBodyUI)
    return false;
  return true;
};

// src/controls/widgets/bool/InputBoolUI.tsx
import { observer as observer3 } from "mobx-react-lite";
var isDragging = false;
var wasEnabled = false;
var InputBoolUI = observer3(function InputBoolUI_(p) {
  const isActive = p.active ?? false;
  const display = p.display ?? "check";
  const expand = p.expand;
  const icon = p.icon;
  const label = p.text;
  const isDraggingListener = (ev) => {
    if (ev.button == 0) {
      isDragging = false;
      window.removeEventListener("mouseup", isDraggingListener, true);
    }
  };
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: p.className,
      style: p.style,
      tw: [
        "WIDGET-FIELD select-none",
        "flex items-center",
        "!outline-none",
        "hover:brightness-110",
        isActive && "brightness-110",
        // Make the click-able area take up the entire width when as a checkmark and haven't explicitly set expand to false.
        (display == "check" && expand === void 0 || expand) && "w-full"
      ],
      tabIndex: -1,
      onMouseDown: (ev) => {
        if (ev.button == 0) {
          wasEnabled = !isActive;
          isDragging = true;
          ev.stopPropagation();
          window.addEventListener("mouseup", isDraggingListener, true);
          if (!p.onValueChange)
            return;
          p.onValueChange(!isActive);
        }
      },
      onMouseEnter: (ev) => {
        if (!isDragging)
          return;
        if (!p.onValueChange)
          return;
        p.onValueChange(wasEnabled);
      },
      children: display == "check" ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            tw: [
              //
              "flex items-center rounded-sm bg-base-100",
              "border border-base-200",
              "border-b-2 border-b-base-300 box-content"
            ],
            children: /* @__PURE__ */ jsx(
              "input",
              {
                type: "checkbox",
                checked: isActive,
                tw: ["checkbox checkbox-primary h-5 w-5 rounded-sm !outline-none cursor-default"],
                tabIndex: -1,
                readOnly: true
              }
            )
          }
        ),
        icon && /* @__PURE__ */ jsx("span", { tw: "pl-1.5", className: "material-symbols-outlined", children: icon }),
        label && /* @__PURE__ */ jsx("div", { tw: [icon ? "pl-1" : "pl-1.5"], children: label })
      ] }) : /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(
        "div",
        {
          tw: [
            //
            "flex items-center h-full p-1 px-2 rounded",
            "bg-base-200 border border-base-100 text-shadow",
            "border-b-2 border-b-base-300",
            isActive && "bg-primary text-primary-content text-shadow-inv",
            icon && "pl-1.5",
            expand && "w-full justify-center"
          ],
          children: [
            icon && /* @__PURE__ */ jsx("span", { tw: "flex-shrink-0 h-full pr-1.5 shadow-inherit", className: "material-symbols-outlined", children: icon }),
            /* @__PURE__ */ jsx("p", { tw: "w-full text-center line-clamp-1", children: label ? label : /* @__PURE__ */ jsx(Fragment, {}) })
          ]
        }
      ) })
    }
  );
});

// src/controls/shared/Widget_ToggleUI.tsx
import { observer as observer4 } from "mobx-react-lite";
var Widget_ToggleUI = observer4(function Widget_ToggleUI_(p) {
  if (!isWidgetOptional(p.widget))
    return null;
  const widget = p.widget;
  return /* @__PURE__ */ jsx(
    InputBoolUI,
    {
      active: widget.serial.active,
      expand: false,
      onValueChange: (value) => widget.setActive(value)
    }
  );
});

// src/rsuite/reveal/ModalShell.tsx
import { observer as observer5 } from "mobx-react-lite";
var ModalShellUI = observer5(function ModalShellUI_(p) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      onClick: (ev) => {
        ev.stopPropagation();
      },
      tw: ["animate-in fade-in", "virtualBorder p-4 rounded-xl bg-base-100 shadow-xl"],
      children: [
        /* @__PURE__ */ jsxs("div", { tw: "flex", children: [
          /* @__PURE__ */ jsx("div", { tw: "text-xl", children: p.title }),
          /* @__PURE__ */ jsx("div", { tw: "flex-1" }),
          /* @__PURE__ */ jsx("div", { tw: "btn btn-sm btn-square", children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "close" }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "divider my-0" }),
        /* @__PURE__ */ jsx("div", { tw: "_ModalBody", children: p.children }),
        /* @__PURE__ */ jsx("div", { tw: "_ModalFooter", children: p.footer })
      ]
    }
  );
});

// src/rsuite/reveal/RevealPlacement.tsx
var computePlacement = (placement, rect) => {
  if (placement == "popup-xs")
    return { top: 0, left: 0 };
  if (placement == "popup-sm")
    return { top: 0, left: 0 };
  if (placement == "popup-lg")
    return { top: 0, left: 0 };
  if (placement == "auto") {
    placement = (() => {
      const top = rect.top;
      const bottom = window.innerHeight - rect.bottom;
      const left = rect.left;
      const right = window.innerWidth - rect.right;
      const minX = Math.min(left, right);
      const minY = Math.min(top, bottom);
      return minY == top ? minX == left ? "bottomStart" : "bottomEnd" : minX == left ? "topStart" : "topEnd";
    })();
  }
  if (placement == "bottomStart")
    return { top: rect.bottom, left: rect.left };
  if (placement == "bottom")
    return { top: rect.bottom, left: rect.left + rect.width / 2, transform: "translate(-50%)" };
  if (placement == "bottomEnd")
    return { top: rect.bottom, left: rect.right, transform: "translate(-100%)" };
  if (placement == "topStart")
    return { top: rect.top, left: rect.left, transform: "translateY(-100%)" };
  if (placement == "top")
    return { top: rect.top, left: rect.left + rect.width / 2, transform: "translate(-50%, -100%)" };
  if (placement == "topEnd")
    return { top: rect.top, left: rect.right, transform: "translate(-100%, -100%)" };
  if (placement == "leftStart")
    return { top: rect.top, left: rect.left, transform: "translateX(-100%)" };
  if (placement == "left")
    return { top: rect.top + rect.height / 2, left: rect.left, transform: "translate(-100%, -50%)" };
  if (placement == "leftEnd")
    return { top: rect.bottom, left: rect.left, transform: "translate(-100%, -100%)" };
  if (placement == "rightStart")
    return { top: rect.top, left: rect.right };
  if (placement == "right")
    return { top: rect.top + rect.height / 2, left: rect.right, transform: "translateY(-50%)" };
  if (placement == "rightEnd")
    return { top: rect.bottom, left: rect.right, transform: "translateY(-100%)" };
  return { top: rect.bottom, left: rect.left };
};

// src/rsuite/reveal/RevealState.tsx
import { makeAutoObservable, observable } from "mobx";
var defaultShowDelay = 100;
var defaultHideDelay = 300;
var RevealState = class _RevealState {
  constructor(p) {
    this.p = p;
    this.uid = _RevealState.nextUID++;
    // ------------------------------------------------
    this.inAnchor = false;
    this.inTooltip = false;
    // prettier-ignore
    // position --------------------------------------------
    this.tooltipPosition = { top: 0, left: 0 };
    this.setPosition = (rect) => {
      this.tooltipPosition = computePlacement(this.placement, rect);
    };
    // lock --------------------------------------------
    this._lock = false;
    this.toggleLock = () => {
      this._lock = !this._lock;
    };
    // anchor --------------------------------------------
    this.enterAnchorTimeoutId = null;
    this.leaveAnchorTimeoutId = null;
    this.onMouseEnterAnchor = () => {
      if (!this.triggerOnHover && !this.visible)
        return;
      if (_RevealState.shared.current)
        return this.enterAnchor();
      this._resetAllAnchorTimouts();
      this.enterAnchorTimeoutId = setTimeout(this.enterAnchor, this.showDelay);
    };
    this.onMouseLeaveAnchor = () => {
      if (this.placement.startsWith("popup"))
        return;
      this._resetAllAnchorTimouts();
      this.leaveAnchorTimeoutId = setTimeout(this.leaveAnchor, this.hideDelay);
    };
    // ---
    this.enterAnchor = () => {
      if (_RevealState.shared.current != this)
        _RevealState.shared.current?.close();
      _RevealState.shared.current = this;
      this._resetAllAnchorTimouts();
      this.inAnchor = true;
    };
    this.leaveAnchor = () => {
      if (_RevealState.shared.current == this)
        _RevealState.shared.current = null;
      this._resetAllAnchorTimouts();
      this.inAnchor = false;
    };
    // ---
    this._resetAllAnchorTimouts = () => {
      this._resetAnchorEnterTimeout();
      this._resetAnchorLeaveTimeout();
    };
    this._resetAnchorEnterTimeout = () => {
      if (this.enterAnchorTimeoutId) {
        clearTimeout(this.enterAnchorTimeoutId);
        this.enterAnchorTimeoutId = null;
      }
    };
    this._resetAnchorLeaveTimeout = () => {
      if (this.leaveAnchorTimeoutId) {
        clearTimeout(this.leaveAnchorTimeoutId);
        this.leaveAnchorTimeoutId = null;
      }
    };
    // tooltip --------------------------------------------
    this.enterTooltipTimeoutId = null;
    this.leaveTooltipTimeoutId = null;
    this.onMouseEnterTooltip = () => {
      this._resetAllTooltipTimouts();
      this.enterTooltipTimeoutId = setTimeout(this.enterTooltip, this.showDelay);
    };
    this.onMouseLeaveTooltip = () => {
      if (this.placement.startsWith("popup"))
        return;
      this._resetAllTooltipTimouts();
      this.leaveTooltipTimeoutId = setTimeout(this.leaveTooltip, this.hideDelay);
    };
    // ---
    this.enterTooltip = () => {
      this._resetAllTooltipTimouts();
      this.inTooltip = true;
    };
    this.leaveTooltip = () => {
      this._resetAllTooltipTimouts();
      this.inTooltip = false;
    };
    // ---
    this._resetAllTooltipTimouts = () => {
      this._resetTooltipEnterTimeout();
      this._resetTooltipLeaveTimeout();
    };
    this._resetTooltipEnterTimeout = () => {
      if (this.enterTooltipTimeoutId) {
        clearTimeout(this.enterTooltipTimeoutId);
        this.enterTooltipTimeoutId = null;
      }
    };
    this._resetTooltipLeaveTimeout = () => {
      if (this.leaveTooltipTimeoutId) {
        clearTimeout(this.leaveTooltipTimeoutId);
        this.leaveTooltipTimeoutId = null;
      }
    };
    makeAutoObservable(this, { uid: false, p: false });
  }
  static {
    this.nextUID = 1;
  }
  static {
    this.shared = observable({ current: null }, { current: observable.ref });
  }
  /** toolip is visible if either inAnchor or inTooltip */
  get visible() {
    if (this._lock)
      return true;
    return this.inAnchor || this.inTooltip;
  }
  close() {
    this._resetAllAnchorTimouts();
    this._resetAllTooltipTimouts();
    this.inAnchor = false;
    this.inTooltip = false;
  }
  get triggerOnClick() {
    return this.p.trigger == null || this.p.trigger == "click" || //
    this.p.trigger == "clickAndHover";
  }
  get triggerOnHover() {
    return this.p.trigger == "hover" || //
    this.p.trigger == "clickAndHover";
  }
  get showDelay() {
    return this.p.showDelay ?? defaultShowDelay;
  }
  // prettier-ignore
  get hideDelay() {
    return this.p.hideDelay ?? defaultHideDelay;
  }
  // prettier-ignore
  get placement() {
    return this.p.placement ?? "auto";
  }
  // UI --------------------------------------------
  get defaultCursor() {
    if (!this.triggerOnHover)
      return "cursor-pointer";
    return "cursor-help";
  }
};

// src/rsuite/reveal/RevealUI.tsx
import { observable as observable2 } from "mobx";
import { observer as observer6 } from "mobx-react-lite";
import { useEffect, useMemo, useRef } from "react";
import { createPortal } from "react-dom";
var useMemoLazy = (fn) => useMemo(() => {
  let x = observable2({
    uist: null,
    uist2: () => {
      if (x.uist)
        return x.uist;
      console.log(`[\u{1F499}] init RevealUI`);
      x.uist = fn();
      return x.uist;
    }
  });
  return x;
}, []);
var RevealUI = observer6(function RevealUI_(p) {
  const { uist, uist2 } = useMemoLazy(() => new RevealState(p));
  const ref = useRef(null);
  useEffect(() => {
    if (uist?.visible && ref.current) {
      const rect = ref.current.getBoundingClientRect();
      uist.setPosition(rect);
    }
  }, [uist?.visible]);
  const content = p.children;
  const tooltip = mkTooltip(uist);
  return /* @__PURE__ */ jsxs(
    "span",
    {
      tw: uist?.defaultCursor,
      className: p.className,
      ref,
      style: p.style,
      onContextMenu: () => uist2().toggleLock(),
      onMouseEnter: () => uist2().onMouseEnterAnchor(),
      onMouseLeave: () => uist2().onMouseLeaveAnchor(),
      onClick: (ev) => {
        const uist3 = uist2();
        const toc = uist3.triggerOnClick;
        if (!toc)
          return;
        ev.stopPropagation();
        ev.preventDefault();
        if (uist3.visible)
          uist3.leaveAnchor();
        else
          uist3.enterAnchor();
      },
      children: [
        content,
        tooltip
      ]
    }
  );
});
var mkTooltip = (uist) => {
  if (uist == null)
    return null;
  if (!uist?.visible)
    return null;
  const element = document.getElementById(
    uist.p.placement?.startsWith("#") ? uist.p.placement.slice(1) : "tooltip-root"
  );
  const pos = uist.tooltipPosition;
  const p = uist.p;
  const hiddenContent = p.content();
  const revealedContent = uist.placement.startsWith("#") ? /* @__PURE__ */ jsx(
    "div",
    {
      ref: (e) => {
        if (e == null)
          return cushy._popups.filter((p2) => p2 !== uist);
        cushy._popups.push(uist);
      },
      onKeyUp: (ev) => {
        if (ev.key === "Escape") {
          uist.close();
          ev.stopPropagation();
          ev.preventDefault();
        }
      },
      onClick: (ev) => {
        p.onClick?.(ev);
        uist.close();
        ev.stopPropagation();
        ev.preventDefault();
      },
      style: { zIndex: 99999999, backgroundColor: "#0000003d" },
      tw: "pointer-events-auto w-full h-full flex items-center justify-center z-50",
      children: hiddenContent
    }
  ) : uist.placement.startsWith("popup") ? /* @__PURE__ */ jsx(
    "div",
    {
      ref: (e) => {
        if (e == null)
          return cushy._popups.filter((p2) => p2 !== uist);
        cushy._popups.push(uist);
      },
      onKeyUp: (ev) => {
        if (ev.key === "Escape") {
          uist.close();
          ev.stopPropagation();
          ev.preventDefault();
        }
      },
      onClick: (ev) => {
        p.onClick?.(ev);
        uist.close();
        ev.stopPropagation();
        ev.preventDefault();
      },
      style: { zIndex: 99999999, backgroundColor: "#0000003d" },
      tw: "pointer-events-auto absolute w-full h-full flex items-center justify-center z-50",
      children: /* @__PURE__ */ jsx(ModalShellUI, { title: p.title, children: hiddenContent })
    }
  ) : /* @__PURE__ */ jsxs(
    "div",
    {
      className: p.tooltipWrapperClassName,
      tw: ["_RevealUI card card-bordered bg-base-100 shadow-xl pointer-events-auto"],
      onClick: (ev) => {
        ev.stopPropagation();
        ev.preventDefault();
      },
      onMouseEnter: uist.onMouseEnterTooltip,
      onMouseLeave: uist.onMouseLeaveTooltip,
      onContextMenu: uist.enterAnchor,
      style: {
        //   borderTop: uist._lock ? '1px dashed yellow' : undefined,
        position: "absolute",
        zIndex: 99999999,
        top: pos.top ? `${pos.top}px` : void 0,
        bottom: pos.bottom ? `${pos.bottom}px` : void 0,
        left: pos.left ? `${pos.left}px` : void 0,
        right: pos.right ? `${pos.right}px` : void 0,
        transform: pos.transform
        // Adjust positioning as needed
      },
      children: [
        p.title ? /* @__PURE__ */ jsxs("div", { tw: "px-2", children: [
          /* @__PURE__ */ jsx("div", { tw: "py-0.5", children: p.title }),
          /* @__PURE__ */ jsx("div", { tw: "w-full rounded bg-neutral-content", style: { height: "1px" } })
        ] }) : /* @__PURE__ */ jsx(Fragment, {}),
        hiddenContent,
        uist._lock ? /* @__PURE__ */ jsxs("span", { tw: "opacity-50 italic text-sm flex gap-1 items-center justify-center", children: [
          /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "lock" }),
          "locked; right-click to unlock"
        ] }) : null
      ]
    }
  );
  return createPortal(revealedContent, element);
};

// src/utils/misc/exhaust.ts
var exhaust = (x) => x;

// src/rsuite/shims.tsx
import { observer as observer7 } from "mobx-react-lite";
var FormHelpText = (p) => /* @__PURE__ */ jsx("div", { ...p });
var FormControlLabel = (p) => /* @__PURE__ */ jsx("label", { ...p });
var FormControl = (p) => /* @__PURE__ */ jsx("input", { tw: "input input-bordered input-sm", ...p });
var Joined = (p) => /* @__PURE__ */ jsx("div", { tw: [p.className, "join virtualBorder"], children: p.children });
var Addon = observer7(function Addon_(p) {
  return /* @__PURE__ */ jsx("div", { tw: "flex items-center px-2 join-item", ...p });
});
var Button = (p) => {
  const { icon, active, size, loading, disabled, appearance, ...rest } = p;
  return /* @__PURE__ */ jsxs(
    "button",
    {
      ...rest,
      tw: [
        "btn",
        p.loading || p.disabled ? "btn-disabled" : null,
        p.active ? "btn-active" : null,
        appearance ? (() => {
          if (appearance === "primary")
            return "btn-primary";
          if (appearance === "ghost")
            return "btn-outline";
          if (appearance === "link")
            return "btn-link";
          if (appearance === "default")
            return null;
          if (appearance === "subtle")
            return null;
          return exhaust(appearance);
        })() : null,
        p.size ? (() => {
          if (p.size === "sm")
            return "btn-sm";
          if (p.size === "xs")
            return "btn-xs";
          if (p.size === "lg")
            return "btn-lg";
          if (p.size === "md")
            return null;
          return exhaust(p.size);
        })() : null,
        ...p?.tw ?? []
      ],
      children: [
        p.icon,
        p.children
      ]
    }
  );
};
var Input = (p) => {
  const { tw, className, children, ...rest } = p;
  return /* @__PURE__ */ jsx("input", { tw: [tw, className, "input input-bordered input-sm"], ...rest, children });
};
var InputNumberBase = observer7(function InputNumberBase_(p) {
  const sizeClass = p._size ? `input-${p._size}` : null;
  return /* @__PURE__ */ jsx(
    "input",
    {
      type: "number",
      tw: ["input input-sm", sizeClass],
      ...p
    }
  );
});
var Slider = observer7(function Slider_(p) {
  return /* @__PURE__ */ jsx(
    "input",
    {
      type: "range",
      ...p,
      tw: ["range range-sm range-primary"]
    }
  );
});
var Radio = observer7(function Radio_(p) {
  return /* @__PURE__ */ jsx(
    "input",
    {
      type: "radio",
      ...p
    }
  );
});
var Toggle = observer7(function Toggle_(p) {
  return /* @__PURE__ */ jsx(
    "input",
    {
      type: "checkbox",
      ...p,
      tw: [
        //
        "toggle toggle-primary"
        // p.checked && 'toggle-success',
      ]
    }
  );
});
var SelectPicker = (p) => /* @__PURE__ */ jsx("select", { ...p });
var TagPicker = (p) => /* @__PURE__ */ jsx("select", { multiple: true, ...p });
var MultiCascader = (p) => /* @__PURE__ */ jsx("select", { multiple: true, ...p });
var Tree = (p) => /* @__PURE__ */ jsx("div", { ...p });
var Rate = (p) => /* @__PURE__ */ jsx("div", { tw: "rating rating-md rating-sm", children: new Array(p.max ?? 1).fill(0).map((_, ix) => /* @__PURE__ */ jsx(
  "input",
  {
    name: p.name,
    checked: p.value === ix,
    onChange: () => p.onChange?.(ix),
    type: "radio",
    tw: ["mask mask-star fade-in-40", p.disabled ? "bg-base-300" : "bg-orange-400"]
  },
  ix
)) });
var Whisper = (p) => /* @__PURE__ */ jsx(RevealUI, { content: () => p.speaker, children: p.children });
var Speaker = (p) => /* @__PURE__ */ jsx("span", { ...p });
var Popover = (p) => /* @__PURE__ */ jsx("span", { ...p });
var Tooltip = (p) => /* @__PURE__ */ jsx("span", { ...p });
var Modal = (p) => /* @__PURE__ */ jsx("div", { ...p });
var ModalHeader = (p) => /* @__PURE__ */ jsx("div", { ...p });
var ModalTitle = (p) => /* @__PURE__ */ jsx("div", { ...p });
var ModalBody = (p) => /* @__PURE__ */ jsx("div", { ...p });
var ModalFooter = (p) => /* @__PURE__ */ jsx("div", { ...p });
var NavItem = (p) => /* @__PURE__ */ jsx("div", { ...p });
var Menu = (p) => /* @__PURE__ */ jsx("div", { ...p });
var MenuBar = (p) => /* @__PURE__ */ jsx("div", { ...p });
var DropdownMenu = (p) => /* @__PURE__ */ jsx("div", { ...p });
var Panel = (p) => {
  const { header, children, ...rest } = p;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      tw: "p-2 border border-opacity-25 bg-base-200 bg-opacity-50 border-base-content input-bordered rounded-btn",
      ...rest,
      children: [
        header,
        p.children
      ]
    }
  );
};
var ProgressLine = observer7(function ProgressLine_(p) {
  const status = p.status === "success" ? "progress-success" : "progress-info";
  return /* @__PURE__ */ jsx(
    "progress",
    {
      tw: [status, "m-0 progress", p.className],
      value: p.percent,
      max: 100
    }
  );
});
var messageIcon = (type) => {
  if (type === "error")
    return /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined !text-xl", children: "error" });
  if (type === "info")
    return /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined !text-xl", children: "info" });
  if (type === "warning")
    return /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined !text-xl", children: "warning" });
  exhaust(type);
  return null;
};
var Message = observer7(function Message_(p) {
  const { showIcon, ...rest } = p;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      tw: [
        p.type === "error" ? "bg-error text-error-content" : p.type === "warning" ? "bg-warning text-warning-content" : "bg-base text-base-content"
      ],
      ...rest,
      children: [
        p.header,
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "flex flex-wrap items-center gap-2 p-2",
            children: [
              messageIcon(p.type),
              /* @__PURE__ */ jsx("div", { children: p.children })
            ]
          }
        )
      ]
    }
  );
});
var Tag = (p) => /* @__PURE__ */ jsx("div", { ...p });
var Loader = observer7((p) => /* @__PURE__ */ jsx(
  "span",
  {
    className: p.className,
    tw: [`loading loading-spinner loading-${p.size ?? "sm"}`]
  }
));
var RadioTile = (p) => /* @__PURE__ */ jsx("div", { ...p });

// src/controls/shared/WidgetTooltipUI.tsx
import { observer as observer8 } from "mobx-react-lite";
var WidgetTooltipUI = observer8(function WidgetTooltipUI_(p) {
  const widget = p.widget;
  return /* @__PURE__ */ jsx(RevealUI, { content: () => /* @__PURE__ */ jsx(Tooltip, { children: widget.config.tooltip }), children: /* @__PURE__ */ jsx("div", { className: "btn btn-sm btn-square btn-ghost", children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "info" }) }) });
});

// src/controls/shared/WidgetWithLabelUI.tsx
import { observer as observer9 } from "mobx-react-lite";
import { ErrorBoundary } from "react-error-boundary";
var isDragging2 = false;
var wasEnabled2 = false;
var WidgetWithLabelUI = observer9(function WidgetWithLabelUI_(p) {
  if (p.widget.config.hidden)
    return null;
  const rootKey = p.rootKey;
  const originalWidget = p.widget;
  const widget = getActualWidgetToDisplay(originalWidget);
  const isDisabled = isWidgetOptional(originalWidget) && !originalWidget.serial.active;
  const HeaderUI = widget.header();
  const BodyUI = widget.body();
  const isCollapsible = getIfWidgetIsCollapsible(widget);
  const isCollapsed = (widget.serial.collapsed ?? isDisabled) && isCollapsible;
  const alignLabel = p.alignLabel ?? getIfWidgetNeedAlignedLabel(widget);
  const k = widget;
  if (isWidgetGroup(k) && //
  Object.keys(k.fields).length === 0 && k.config.requirements == null) {
    return;
  }
  const showBorder = getBorderStatusForWidget(widget);
  const labelText = (() => {
    if (p.label != null)
      return p.label;
    if (widget.config.label != null)
      return widget.config.label;
    return makeLabelFromFieldName(p.rootKey);
  })();
  const LABEL = (
    // <span onClick={onLabelClick} style={{ lineHeight: '1rem' }}>
    /* @__PURE__ */ jsxs(
      "span",
      {
        tw: [isCollapsed || isCollapsible ? "cursor-pointer" : null],
        className: "COLLAPSE-PASSTHROUGH",
        style: { lineHeight: "1rem" },
        children: [
          labelText,
          widget.config.showID ? /* @__PURE__ */ jsxs("span", { tw: "opacity-50 italic text-sm", children: [
            "#",
            widget.id.slice(0, 3)
          ] }) : null
        ]
      }
    )
  );
  const styleDISABLED = isDisabled ? { pointerEvents: "none", opacity: 0.3, backgroundColor: "rgba(0,0,0,0.05)" } : void 0;
  const isDraggingListener = (ev) => {
    if (ev.button == 0) {
      isDragging2 = false;
      window.removeEventListener("mouseup", isDraggingListener, true);
    }
  };
  return /* @__PURE__ */ jsx(
    "div",
    {
      tw: [
        widget.background && (isCollapsible || showBorder) && "bg-base-100",
        showBorder && "WIDGET-GROUP-BORDERED",
        p.isTopLevel ? "TOP-LEVEL-FIELD" : "SUB-FIELD",
        widget.type
      ],
      children: /* @__PURE__ */ jsxs(AnimatedSizeUI, { children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "WIDGET-HEADER COLLAPSE-PASSTHROUGH",
            tw: ["flex items-center gap-0.5 select-none"],
            onMouseDown: (ev) => {
              if (ev.button != 0 || !isCollapsible)
                return;
              const target = ev.target;
              if (!target.classList.contains("COLLAPSE-PASSTHROUGH"))
                return;
              isDragging2 = true;
              window.addEventListener("mouseup", isDraggingListener, true);
              wasEnabled2 = !widget.serial.collapsed;
              widget.setCollapsed(wasEnabled2);
            },
            onMouseMove: (ev) => {
              if (!isDragging2 || !isCollapsible)
                return;
              widget.setCollapsed(wasEnabled2);
            },
            children: [
              /* @__PURE__ */ jsxs(
                "span",
                {
                  tw: [
                    "flex justify-end gap-0.5 flex-none items-center shrink-0",
                    // p.isTopLevel && !isDisabled ? 'font-bold' : 'text-base',
                    isDisabled ? void 0 : "text-primary"
                  ],
                  style: alignLabel ? {
                    textAlign: "right",
                    minWidth: "8rem",
                    width: alignLabel && HeaderUI ? "35%" : void 0,
                    marginRight: alignLabel && HeaderUI ? "0.25rem" : void 0
                  } : void 0,
                  children: [
                    (isCollapsed || isCollapsible) && /* @__PURE__ */ jsx("span", { className: "WIDGET-COLLAPSE-BTN COLLAPSE-PASSTHROUGH material-symbols-outlined opacity-70 hover:opacity-100 cursor-pointer", children: isCollapsed ? "chevron_right" : "expand_more" }),
                    BodyUI && /* @__PURE__ */ jsx(Widget_ToggleUI, { widget: originalWidget }),
                    widget.config.tooltip && /* @__PURE__ */ jsx(WidgetTooltipUI, { widget }),
                    LABEL,
                    !BodyUI && /* @__PURE__ */ jsx(Widget_ToggleUI, { widget: originalWidget })
                  ]
                }
              ),
              HeaderUI && /* @__PURE__ */ jsx("div", { className: "COLLAPSE-PASSTHROUGH", tw: "flex items-center gap-0.5 flex-1", style: styleDISABLED, children: /* @__PURE__ */ jsx(ErrorBoundary, { FallbackComponent: ErrorBoundaryFallback, onReset: (details) => {
              }, children: HeaderUI }) })
            ]
          }
        ),
        BodyUI && !isCollapsed && /* @__PURE__ */ jsx(ErrorBoundary, { FallbackComponent: ErrorBoundaryFallback, onReset: (details) => {
        }, children: /* @__PURE__ */ jsx("div", { style: styleDISABLED, tw: [isCollapsible && "WIDGET-BLOCK"], children: BodyUI }) })
      ] })
    },
    rootKey
  );
});

// src/controls/widgets/group/WidgetGroupUI.tsx
import { observer as observer10 } from "mobx-react-lite";
var WidgetGroup_LineUI = observer10(function WidgetGroup_LineUI_(p) {
  if (!p.widget.serial.collapsed)
    return null;
  return /* @__PURE__ */ jsx("div", { className: "COLLAPSE-PASSTHROUGH", tw: "line-clamp-1 italic opacity-50", children: p.widget.summary });
});
var WidgetGroup_BlockUI = observer10(function WidgetGroup_BlockUI_(p) {
  const widget = p.widget;
  const isTopLevel = widget.config.topLevel;
  const groupFields = Object.entries(widget.fields);
  const isHorizontal = widget.config.layout === "H";
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: p.className,
      tw: ["WIDGET-GROUP", "flex items-start w-full text-base-content"],
      children: widget.serial.collapsed ? null : /* @__PURE__ */ jsx(
        "div",
        {
          className: widget.config.className,
          tw: [
            "_WidgetGroupUI w-full",
            isHorizontal ? `GROUP-HORIZONTAL flex gap-1 flex-wrap` : `GROUP-VERTICAL   flex gap-1 flex-col`
          ],
          children: groupFields.map(([rootKey, sub], ix) => /* @__PURE__ */ jsx(
            WidgetWithLabelUI,
            {
              isTopLevel,
              rootKey,
              alignLabel: isHorizontal ? false : widget.config.alignLabel,
              widget: bang(sub)
            },
            rootKey
          ))
        }
      )
    }
  );
});

// src/rsuite/MarkdownUI.tsx
import { marked } from "marked";
import { observer as observer11 } from "mobx-react-lite";
var MarkdownUI = observer11(function MarkdownUI_(p) {
  if (p.markdown == null)
    return null;
  return /* @__PURE__ */ jsx(
    "div",
    {
      tw: "_MD",
      className: p.className,
      dangerouslySetInnerHTML: { __html: marked(p.markdown) }
    }
  );
});

// src/panels/MessageUI.tsx
import { observer as observer12 } from "mobx-react-lite";
var MessageInfoUI = observer12(function MessageInfoUI_(p) {
  return /* @__PURE__ */ jsxs("div", { className: p.className, tw: "virtualBorder p-1 rounded flex items-center gap-2 bg-info-2", children: [
    /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "info" }),
    p.title ? /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { tw: "text-xl w-full font-bold", children: p.title }),
      p.children,
      /* @__PURE__ */ jsx(MarkdownUI, { markdown: p.markdown })
    ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      p.children,
      /* @__PURE__ */ jsx(MarkdownUI, { markdown: p.markdown })
    ] })
  ] });
});
var MessageErrorUI = observer12(function MessageErrorUI_(p) {
  return /* @__PURE__ */ jsxs("div", { tw: "virtualBorder p-1 rounded flex items-center gap-2 bg-error-2", children: [
    /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "error" }),
    p.title ? /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { tw: "text-xl w-full font-bold", children: p.title }),
      p.children,
      /* @__PURE__ */ jsx(MarkdownUI, { markdown: p.markdown })
    ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      p.children,
      /* @__PURE__ */ jsx(MarkdownUI, { markdown: p.markdown })
    ] })
  ] });
});
var MessageWarningUI = observer12(function MessageWarningUI_(p) {
  return /* @__PURE__ */ jsxs("div", { tw: "virtualBorder p-1 rounded flex items-center gap-2 bg-warning-2", children: [
    /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "warning" }),
    p.title ? /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { tw: "text-xl w-full font-bold", children: p.title }),
      p.children,
      /* @__PURE__ */ jsx(MarkdownUI, { markdown: p.markdown })
    ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      p.children,
      /* @__PURE__ */ jsx(MarkdownUI, { markdown: p.markdown })
    ] })
  ] });
});

// src/controls/FormUI.tsx
import { observer as observer13 } from "mobx-react-lite";
var FormUI = observer13(function FormUI_(p) {
  const form = p.form;
  if (form == null)
    return /* @__PURE__ */ jsx(MessageErrorUI, { markdown: `form is not yet initialized` });
  if (form.error)
    return /* @__PURE__ */ jsx(MessageErrorUI, { markdown: form.error });
  if (form.root == null)
    return /* @__PURE__ */ jsx(MessageErrorUI, { markdown: "form.root is null" });
  return /* @__PURE__ */ jsx(WidgetGroup_BlockUI, { className: p.className, widget: form.root });
});

// src/controls/shared/runWithGlobalForm.ts
import { nanoid } from "nanoid";
var GlobalFormCtx = class {
  constructor() {
    this.id = nanoid();
    this.currentForm = null;
  }
};
var globalCtx = new GlobalFormCtx();
globalThis.globalCtx = globalCtx;
var runWithGlobalForm = (form, f) => {
  if (globalCtx.currentForm === form)
    return f();
  const prev = globalCtx.currentForm;
  globalCtx.currentForm = form;
  const res = f();
  globalCtx.currentForm = prev;
  return res;
};
var getCurrentForm_IMPL = () => {
  if (globalCtx.currentForm == null) {
    console.log(`[\u{1F459}] `, globalCtx);
    debugger;
    throw new Error(`No form in context !`);
  }
  return globalCtx.currentForm;
};

// src/controls/Spec.ts
var Spec = class _Spec {
  constructor(type, config) {
    this.type = type;
    this.config = config;
    /** wrap widget spec to list stuff */
    this.list = (config = {}) => new _Spec("list", {
      ...config,
      element: this
    });
    this.optional = (startActive = false) => new _Spec("optional", {
      widget: this,
      startActive,
      label: this.config.label,
      requirements: this.config.requirements,
      startCollapsed: this.config.startCollapsed,
      collapsed: this.config.collapsed,
      border: this.config.border
    });
    this.shared = (key) => getCurrentForm_IMPL().shared(key, this);
    /** clone the spec, and patch the cloned config to make it hidden */
    this.hidden = () => new _Spec(this.type, { ...this.config, hidden: true });
  }
};

// src/controls/Form.ts
import { action, isObservable, makeAutoObservable as makeAutoObservable2, observable as observable3 } from "mobx";
import { createElement } from "react";
var Form = class {
  constructor(manager, ui, formConfig) {
    this.manager = manager;
    this.ui = ui;
    this.formConfig = formConfig;
    this.error = null;
    /** shortcut to access the <FormUI /> component without having to import it first */
    this.FormUI = FormUI;
    /**
     * allow to quickly render the form in a react component
     * without having to import any component; usage:
     * | <div>{x.render()}</div>
     */
    this.render = () => createElement(FormUI, { form: this });
    this.at = (key) => {
      return this.root.at(key);
    };
    this.get = (key) => {
      return this.root.get(key);
    };
    // Change tracking ------------------------------------
    this.valueLastUpdatedAt = 0;
    this.serialLastUpdatedAt = 0;
    this._onSerialChange = this.formConfig.onSerialChange ? debounce(this.formConfig.onSerialChange, 200) : null;
    this._onValueChange = this.formConfig.onValueChange ? debounce(this.formConfig.onValueChange, 200) : null;
    /** every widget node must call this function once it's value change */
    this.valueChanged = (widget) => {
      this.valueLastUpdatedAt = Date.now();
      this.serialChanged(widget);
      console.log(`[\u{1F98A}] value changed`);
      this._onValueChange?.(this.root);
    };
    /** every widget node must call this function once it's serial changed */
    this.serialChanged = (_widget) => {
      this.serialLastUpdatedAt = Date.now();
      this._onSerialChange?.(this.root);
    };
    this.knownShared = /* @__PURE__ */ new Map();
    this.ready = false;
    this.init = () => {
      console.log(`[\u{1F950}] Building form ${this.formConfig.name}`);
      const formBuilder = this.builder;
      const rootDef = { topLevel: true, items: () => this.ui?.(formBuilder) ?? {} };
      const unmounted = new Spec("group", rootDef);
      try {
        let initialValue = this.formConfig.initialValue?.();
        if (initialValue && !isObservable(initialValue))
          initialValue = observable3(initialValue);
        const rootWidget = formBuilder._HYDRATE(null, unmounted, initialValue);
        this.ready = true;
        this.error = null;
        return rootWidget;
      } catch (e) {
        console.error(`[\u{1F459}\u{1F534}] Building form ${this.formConfig.name} FAILED`, this);
        console.error(e);
        this.error = "invalid form definition";
        return formBuilder._HYDRATE(null, unmounted, null);
      }
    };
    this.builder = manager.getBuilder(this);
    makeAutoObservable2(this, {
      //
      // builder: false,
      root: false,
      init: action
    });
  }
  get value() {
    return this.root.value;
  }
  get serial() {
    return this.root.serial;
  }
  get fields() {
    return this.root.fields;
  }
  // 🔴 👇 remove that
  get root() {
    const root = this.init();
    Object.defineProperty(this, "root", { value: root });
    return root;
  }
};

// src/controls/FormManager.ts
import { useMemo as useMemo2 } from "react";
var FormManager = class {
  constructor(builderCtor) {
    this.builderCtor = builderCtor;
    this._builders = /* @__PURE__ */ new WeakMap();
    this.getBuilder = (form) => {
      const prev = this._builders.get(form);
      if (prev)
        return prev;
      const builder = new this.builderCtor(form);
      this._builders.set(form, builder);
      return builder;
    };
    this.form = (ui, formProperties = { name: "unnamed" }) => {
      const form = new Form(this, ui, formProperties);
      return form;
    };
    this.useForm = (ui, formProperties = { name: "unnamed" }, deps = []) => {
      return useMemo2(() => {
        const form = new Form(this, ui, formProperties);
        return form;
      }, deps);
    };
    /**
     * copy pasted from useForm, with a better name
     * intented to be used as `cushy.forms.use(...)`
     */
    this.use = (ui, formProperties = { name: "unnamed" }, deps = []) => {
      return useMemo2(() => {
        const form = new Form(this, ui, formProperties);
        return form;
      }, deps);
    };
  }
};

// src/controls/Mixins.tsx
import { observer as observer14 } from "mobx-react-lite";
var ensureObserver = (fn) => {
  if (fn == null)
    return null;
  const isObserver = "$$typeof" in fn && fn.$$typeof === Symbol.for("react.memo");
  const FmtUI = isObserver ? fn : observer14(fn);
  return FmtUI;
};
var mixin = {
  // BUMP ----------------------------------------------------
  bumpSerial() {
    this.form.serialChanged(this);
  },
  // 💬 2024-03-15 rvion: use this regexp to quickly review manual serial set patterns
  // | `serial\.[a-zA-Z_]+(\[[a-zA-Z_]+\])? = `
  bumpValue() {
    this.serial.lastUpdatedAt = Date.now();
    this.form.valueChanged(this);
  },
  // FOLD ----------------------------------------------------
  setCollapsed(val) {
    if (this.serial.collapsed === val)
      return;
    this.serial.collapsed = val;
    this.form.serialChanged(this);
  },
  toggleCollapsed() {
    this.serial.collapsed = !this.serial.collapsed;
    this.form.serialChanged(this);
  },
  // UI ----------------------------------------------------
  ui() {
    return /* @__PURE__ */ jsx(WidgetWithLabelUI, { widget: this, rootKey: "_" });
  },
  defaultHeader() {
    if (this.DefaultHeaderUI == null)
      return;
    return /* @__PURE__ */ jsx(this.DefaultHeaderUI, { widget: this });
  },
  defaultBody() {
    if (this.DefaultBodyUI == null)
      return;
    return /* @__PURE__ */ jsx(this.DefaultBodyUI, { widget: this });
  },
  header() {
    const HeaderUI = "header" in this.config ? ensureObserver(this.config.header) : this.DefaultHeaderUI;
    if (HeaderUI == null)
      return;
    return /* @__PURE__ */ jsx(HeaderUI, { widget: this });
  },
  body() {
    const BodyUI = "body" in this.config ? ensureObserver(this.config.body) : this.DefaultBodyUI;
    if (BodyUI == null)
      return;
    return /* @__PURE__ */ jsx(BodyUI, { widget: this });
  }
};
var descriptors = Object.getOwnPropertyDescriptors(mixin);
var applyWidgetMixinV2 = (self) => {
  Object.defineProperties(self, descriptors);
};

// src/controls/widgets/bool/WidgetBoolUI.tsx
import { observer as observer15 } from "mobx-react-lite";
var WidgetBoolUI = observer15(function WidgetBoolUI_(p) {
  const widget = p.widget;
  if (widget.config.label2) {
    console.warn("label2 is deprecated, please use the text option instead. label2 will be removed in the future");
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      InputBoolUI,
      {
        display: widget.config.display,
        expand: widget.config.expand,
        icon: widget.config.icon,
        text: widget.config.text ?? widget.config.label2,
        active: widget.value,
        onValueChange: (value) => widget.value = value
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        tw: [widget.isChanged ? void 0 : "btn-disabled opacity-50"],
        onClick: () => widget.reset(),
        className: "btn btn-xs btn-narrower btn-ghost",
        children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "undo" })
      }
    )
  ] });
});

// src/controls/widgets/bool/WidgetBool.tsx
import { computed, makeAutoObservable as makeAutoObservable3, observable as observable4, runInAction as runInAction2 } from "mobx";
import { nanoid as nanoid2 } from "nanoid";
var Widget_bool = class {
  constructor(form, parent, config, serial) {
    this.form = form;
    this.parent = parent;
    this.config = config;
    this.DefaultHeaderUI = WidgetBoolUI;
    this.DefaultBodyUI = void 0;
    this.type = "bool";
    this.setOn = () => this.value = true;
    this.setOff = () => this.value = false;
    this.toggle = () => this.value = !this.value;
    this.defaultValue = this.config.default ?? false;
    // prettier-ignore
    this.reset = () => this.value = this.defaultValue;
    this.id = serial?.id ?? nanoid2();
    this.serial = serial ?? {
      id: this.id,
      type: "bool",
      active: config.default ?? false,
      collapsed: config.startCollapsed
    };
    applyWidgetMixinV2(this);
    makeAutoObservable3(this, {
      serial: observable4,
      value: computed
    });
  }
  get isChanged() {
    return this.value !== this.defaultValue;
  }
  get value() {
    return this.serial.active ?? false;
  }
  set value(next) {
    if (this.serial.active === next)
      return;
    runInAction2(() => {
      this.serial.active = next;
      this.bumpValue();
    });
  }
};
registerWidgetClass("bool", Widget_bool);

// src/controls/widgets/button/WidgetButtonUI.tsx
import { runInAction as runInAction3 } from "mobx";
import { observer as observer16 } from "mobx-react-lite";
var WidgetInlineRunUI = observer16(function WidgetInlineRunUI_(p) {
  const extra = p.widget.config.useContext?.();
  const context = { widget: p.widget, context: extra };
  const icon = p.widget.config.icon?.(context);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      tw: [
        "btn btn-sm join-item",
        p.widget.config.kind === `special` ? `btn-secondary` : p.widget.config.kind === `warning` ? `btn-warning` : `btn-primary`
      ],
      className: "self-start",
      onClick: () => runInAction3(() => p.widget.config.onClick?.(context)),
      children: [
        icon && /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: icon }),
        p.widget.config.text ?? `Run`
      ]
    }
  );
});

// src/controls/widgets/button/WidgetButton.ts
import { makeAutoObservable as makeAutoObservable4, runInAction as runInAction4 } from "mobx";
import { nanoid as nanoid3 } from "nanoid";
var Widget_button = class {
  constructor(form, parent, config, serial) {
    this.form = form;
    this.parent = parent;
    this.config = config;
    this.DefaultHeaderUI = WidgetInlineRunUI;
    this.DefaultBodyUI = void 0;
    this.type = "button";
    if (config.text) {
      config.label = config.label ?? ` `;
    }
    this.id = serial?.id ?? nanoid3();
    this.serial = serial ?? {
      type: "button",
      collapsed: config.startCollapsed,
      id: this.id,
      val: false
    };
    applyWidgetMixinV2(this);
    makeAutoObservable4(this);
  }
  get value() {
    return this.serial.val;
  }
  set value(next) {
    if (this.serial.val === next)
      return;
    runInAction4(() => {
      this.serial.val = next;
      this.bumpValue();
    });
  }
};
registerWidgetClass("button", Widget_button);

// src/utils/misc/toasts.ts
import { toast } from "react-toastify";
var position = "bottom-right";
var toastSuccess = (msg) => toast(msg, { type: "success", position });
var toastInfo = (msg) => toast(msg, { type: "info", position });
var toastError = (msg) => {
  toast(msg, { type: "error", position });
};

// src/utils/misc/searchMatches.ts
function unaccent(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function normalizeText(text) {
  return unaccent(text.toLowerCase());
}
function searchMatches(haystack, needle) {
  return normalizeText(haystack).includes(normalizeText(needle));
}

// src/rsuite/SelectUI.tsx
import { makeAutoObservable as makeAutoObservable5 } from "mobx";
import { observer as observer17 } from "mobx-react-lite";
import React, { useMemo as useMemo3 } from "react";
import { createPortal as createPortal2 } from "react-dom";
var AutoCompleteSelectState = class {
  constructor(p) {
    this.p = p;
    this.isMultiSelect = this.p.multiple ?? false;
    this.searchQuery = "";
    /**
     * function to compare value or options,
     * using the provided equality check  if provided.
     *
     * '===' check if the object is exactly the same.
     * It work in some cases like those:
     * case 1: 🟢
     *   | const myvar = {a:1}
     *   | <SelectUI options={[myvar, {a:2}]}, value={myvar} />
     * case 2: 🟢
     *   | <SelectUI options={[1,2]}, value={1} />
     *   (because primitve type are always compared by value)
     *
     * but not here
     *
     * case 3: ❌
     *   | <SelectUI options={[{a:1}, {a:2}]}, value={{a:1}} />
     *                          👆   is NOT '===' to  👆 (not the same instance object)
     *                                but is "equal" according to human logic
     *
     */
    this.isEqual = (a, b) => {
      if (this.p.equalityCheck)
        return this.p.equalityCheck(a, b);
      return a === b;
    };
    this.anchorRef = React.createRef();
    this.inputRef = React.createRef();
    this.popupRef = React.createRef();
    this.selectedIndex = 0;
    this.isOpen = false;
    this.isDragging = false;
    this.isFocused = false;
    this.wasEnabled = false;
    this.hasMouseEntered = false;
    this.tooltipPosition = { top: void 0, bottom: void 0, left: void 0, right: void 0 };
    this.tooltipMaxHeight = 100;
    this.updatePosition = () => {
      const rect = this.anchorRef.current?.getBoundingClientRect();
      if (rect == null)
        return;
      this.tooltipPosition = {
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        right: void 0,
        bottom: void 0
      };
      const onBottom = window.innerHeight * 0.5 < (rect.top + rect.bottom) * 0.5;
      const onLeft = window.innerWidth * 0.5 < (rect.left + rect.right) * 0.5;
      this.tooltipMaxHeight = (window.innerHeight - rect.bottom) * 0.99;
      const inputHeight = parseInt(window.getComputedStyle(document.body).getPropertyValue("--input-height"));
      const desiredHeight = Math.min(this.options.length * inputHeight * 1.25);
      const bottomSpace = window.innerHeight - rect.bottom;
      if (onBottom && desiredHeight > bottomSpace) {
        this.tooltipMaxHeight = rect.top * 0.99;
        this.tooltipPosition.top = void 0;
        this.tooltipPosition.bottom = window.innerHeight - rect.top;
      }
      if (onLeft) {
        this.tooltipPosition.left = void 0;
        this.tooltipPosition.right = window.innerWidth - rect.right;
      }
    };
    this.onRealWidgetMouseDown = (ev) => {
      this.hasMouseEntered = true;
      this.openMenu();
    };
    this.openMenu = () => {
      this.isOpen = true;
      this.updatePosition();
      this.inputRef.current?.focus();
      window.addEventListener("mousemove", this.MouseMoveTooFar, true);
    };
    // click means focus change => means need to refocus the input
    this.onMenuEntryClick = (ev, index) => {
      ev.preventDefault();
      ev.stopPropagation();
      this.selectOption(index);
      this.inputRef.current?.focus();
    };
    this.handleInputChange = (event) => {
      this.filterOptions(event.target.value);
      this.updatePosition();
    };
    // Close pop-up if too far outside
    // 💬 2024-02-29 rvion:
    // | this code was a good idea; but it's really
    // | not pleasant when working mostly with keyboard and using tab to open selects.
    // | as soon as the moouse move just one pixel, popup close.
    // |  =>  commenting it out until we find a solution confortable in all cases
    this.MouseMoveTooFar = (event) => {
      let popup = this.popupRef?.current;
      let anchor = this.anchorRef?.current;
      if (!popup || !anchor || !this.hasMouseEntered) {
        return;
      }
      const x = event.clientX;
      const y = event.clientY;
      const maxDistance = 75;
      if (
        // left
        popup.offsetLeft - x > maxDistance || // top
        popup.offsetTop - y > maxDistance || // right
        x - (popup.offsetLeft + popup.offsetWidth) > maxDistance || // bottom
        y - (popup.offsetTop + popup.offsetHeight) > maxDistance
      ) {
        this.closeMenu();
      }
    };
    this.onBlur = () => this.closeMenu();
    this.handleTooltipKeyDown = (ev) => {
      if (ev.key === "ArrowDown")
        this.navigateSelection("down");
      else if (ev.key === "ArrowUp")
        this.navigateSelection("up");
      else if (ev.key === "Enter" && !ev.metaKey && !ev.ctrlKey)
        this.selectOption(this.selectedIndex);
    };
    this.onRealInputKeyUp = (ev) => {
      if (ev.key === "Enter" && !this.isOpen) {
        this.openMenu();
        ev.preventDefault();
        ev.stopPropagation();
        return;
      }
      if (ev.key === "Escape") {
        this.closeMenu();
        ev.preventDefault();
        ev.stopPropagation();
        return;
      }
      if (!this.isOpen) {
        this.openMenu();
        this.setNavigationIndex(0);
        ev.preventDefault();
        ev.stopPropagation();
      }
    };
    makeAutoObservable5(this, {
      popupRef: false,
      anchorRef: false,
      inputRef: false
    });
  }
  get options() {
    return this.p.options?.() ?? [];
  }
  get filteredOptions() {
    if (this.searchQuery === "")
      return this.options;
    return this.options.filter((p) => {
      const label = this.p.getLabelText(p);
      return searchMatches(label, this.searchQuery);
    });
  }
  /**
   * return the index of the first selected Item amongst options;
   * just in case the name wasn't clear enough.
   * TODO: rename this funciton, and remove this comment about the function name.
   */
  get indexOfFirstSelectedItemAmongstOptions() {
    const firstSelection = this.firstValue;
    if (firstSelection == null)
      return null;
    return this.options.findIndex((o) => this.isEqual(o, firstSelection));
  }
  /** return the first selected value */
  get firstValue() {
    const v = this.value;
    if (v == null)
      return null;
    if (Array.isArray(v)) {
      if (v.length === 0)
        return null;
      return v[0];
    }
    return v;
  }
  /** currently selected value or values */
  get value() {
    return this.p.value?.();
  }
  /** list of all selected values */
  get values() {
    const v = this.value;
    if (v == null)
      return [];
    return Array.isArray(v) ? v : [v];
  }
  get displayValue() {
    if (this.p.hideValue)
      return this.p.placeholder ?? "";
    let value = this.value;
    const placeHolderStr = this.p.placeholder ?? "Select...";
    if (value == null)
      return placeHolderStr;
    value = Array.isArray(value) ? value : [value];
    const str = value.length === 0 ? placeHolderStr : value.map((i) => {
      const label = this.p.getLabelText(i);
      return /* @__PURE__ */ jsx(
        "div",
        {
          tw: "badge badge-primary text-shadow-inv cursor-not-allowed line-clamp-1",
          onClick: () => this.p.onChange?.(i, this),
          children: label
        },
        label
      );
    });
    if (this.p.label)
      return /* @__PURE__ */ jsxs("div", { tw: "flex gap-1", children: [
        this.p.label,
        ": ",
        str
      ] });
    return /* @__PURE__ */ jsx("div", { tw: "flex gap-1", children: str });
  }
  closeMenu() {
    this.isOpen = false;
    this.isFocused = false;
    this.selectedIndex = 0;
    this.searchQuery = "";
    this.isDragging = false;
    this.hasMouseEntered = false;
    window.removeEventListener("mousemove", this.MouseMoveTooFar, true);
  }
  filterOptions(inputValue) {
    this.searchQuery = inputValue;
    this.isOpen = true;
    this.setNavigationIndex(0);
  }
  selectOption(index) {
    const selectedOption = this.filteredOptions[index];
    if (selectedOption) {
      this.p.onChange?.(selectedOption, this);
      const shouldResetQuery = this.p.resetQueryOnPick ?? false;
      const shouldCloseMenu = this.p.closeOnPick ?? !this.isMultiSelect;
      if (shouldResetQuery)
        this.searchQuery = "";
      if (shouldCloseMenu)
        this.closeMenu();
    }
  }
  navigateSelection(direction) {
    this.updatePosition();
    if (direction === "up" && this.selectedIndex > 0) {
      this.selectedIndex--;
    } else if (direction === "down" && this.selectedIndex < this.filteredOptions.length - 1) {
      this.selectedIndex++;
    }
  }
  setNavigationIndex(value) {
    this.updatePosition();
    this.selectedIndex = value;
  }
};
var SelectUI = observer17(function SelectUI_(p) {
  const s = useMemo3(() => new AutoCompleteSelectState(
    /* st, */
    p
  ), []);
  return /* @__PURE__ */ jsx(
    "div",
    {
      tabIndex: -1,
      tw: [
        "WIDGET-FIELD",
        "flex flex-1 items-center p-0.5 relative",
        "rounded overflow-clip text-shadow",
        "border border-base-100 hover:brightness-110",
        "hover:border-base-200",
        "bg-primary/20 border-1",
        "border-b-2 border-b-base-200 hover:border-b-base-300"
      ],
      className: p.className,
      ref: s.anchorRef,
      onKeyUp: s.onRealInputKeyUp,
      onMouseDown: s.onRealWidgetMouseDown,
      onChange: s.handleInputChange,
      onKeyDown: s.handleTooltipKeyDown,
      onFocus: (ev) => {
        s.isFocused = true;
        if (ev.relatedTarget != null && !(ev.relatedTarget instanceof Window)) {
          s.openMenu();
        }
      },
      onBlur: s.onBlur,
      style: { background: s.searchQuery === "" ? "none" : void 0 },
      children: /* @__PURE__ */ jsxs("div", { className: "flex-1 h-full ", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            tabIndex: -1,
            tw: [
              "input input-xs text-sm",
              "flex items-center gap-1",
              "p-0 h-full bg-transparent",
              "select-none pointer-events-none overflow-clip"
            ],
            children: s.isOpen || s.isFocused ? null : (
              /* Using grid here to make sure that inner text will truncate instead of pushing the right-most icon out of the container. */
              /* @__PURE__ */ jsxs("div", { tw: "grid w-full items-center", style: { gridTemplateColumns: "24px 1fr 24px" }, children: [
                /* @__PURE__ */ jsx("div", { tw: "btn btn-square btn-xs bg-transparent border-0", children: /* @__PURE__ */ jsx("span", { className: "prefix material-symbols-outlined", children: "search" }) }),
                /* @__PURE__ */ jsx("div", { tw: "overflow-hidden", children: s.displayValue }),
                /* @__PURE__ */ jsx("div", { tw: "btn btn-square btn-xs ml-auto bg-transparent border-0", children: /* @__PURE__ */ jsx("span", { className: "suffix material-symbols-outlined ml-auto", children: "arrow_drop_down" }) })
              ] })
            )
          }
        ),
        /* @__PURE__ */ jsx("div", { tw: "absolute top-0 left-0 right-0 z-50 h-full", children: /* @__PURE__ */ jsx(
          "input",
          {
            placeholder: s.isOpen ? p.placeholder : void 0,
            ref: s.inputRef,
            tw: "input input-sm w-full h-full !outline-none",
            type: "text",
            value: s.searchQuery,
            onChange: () => {
            }
          }
        ) }),
        s.isOpen && /* @__PURE__ */ jsx(SelectPopupUI, { s })
      ] })
    }
  );
});
var SelectPopupUI = observer17(function SelectPopupUI_(p) {
  const s = p.s;
  const isDraggingListener = (ev) => {
    if (ev.button != 0)
      return;
    s.isDragging = false;
    window.removeEventListener("mouseup", isDraggingListener, true);
  };
  return createPortal2(
    /* @__PURE__ */ jsx(
      "div",
      {
        ref: s.popupRef,
        tw: [
          "MENU-ROOT _SelectPopupUI bg-base-100 flex",
          "border-l border-r border-base-300 overflow-auto",
          s.tooltipPosition.bottom ? "rounded-t border-t" : "rounded-b border-b"
        ],
        style: {
          minWidth: s.anchorRef.current?.clientWidth ?? "100%",
          maxWidth: window.innerWidth - (s.tooltipPosition.left ? s.tooltipPosition.left : s.tooltipPosition.right ?? 0),
          pointerEvents: "initial",
          position: "absolute",
          zIndex: 99999999,
          top: s.tooltipPosition.top ? `${s.tooltipPosition.top}px` : "unset",
          bottom: s.tooltipPosition.bottom ? `${s.tooltipPosition.bottom}px` : "unset",
          left: s.tooltipPosition.left ? `${s.tooltipPosition.left}px` : "unset",
          right: s.tooltipPosition.right ? `${s.tooltipPosition.right}px` : "unset",
          maxHeight: `${s.tooltipMaxHeight}px`
          // Adjust positioning as needed
        },
        onMouseDown: (ev) => {
          ev.preventDefault();
          ev.stopPropagation();
        },
        onMouseEnter: (ev) => {
          if (s.isOpen) {
            s.hasMouseEntered = true;
          }
        },
        children: /* @__PURE__ */ jsxs("ul", { className: "bg-base-100 max-h-96", tw: "flex-col w-full", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("div", { tw: "overflow-hidden", children: s.displayValue }) }),
          s.filteredOptions.length === 0 ? /* @__PURE__ */ jsx("li", { className: "WIDGET-FIELD text-base", children: "No results" }) : null,
          s.filteredOptions.map((option, index) => {
            const isSelected = s.values.find((v) => s.isEqual(v, option)) != null;
            return /* @__PURE__ */ jsx(
              "li",
              {
                style: { minWidth: "10rem" },
                tw: ["flex rounded py-0.5", "h-auto"],
                onMouseEnter: (ev) => {
                  s.setNavigationIndex(index);
                  if (!s.isDragging || isSelected == s.wasEnabled)
                    return;
                  s.onMenuEntryClick(ev, index);
                },
                onMouseDown: (ev) => {
                  if (ev.button != 0)
                    return;
                  s.isDragging = true;
                  s.wasEnabled = !isSelected;
                  s.onMenuEntryClick(ev, index);
                  window.addEventListener("mouseup", isDraggingListener, true);
                },
                children: /* @__PURE__ */ jsxs(
                  "div",
                  {
                    tw: [
                      "WIDGET-FIELD pl-0.5 flex w-full items-center rounded overflow-auto",
                      "active:bg-base-300 cursor-default text-shadow",
                      index === s.selectedIndex ? "bg-base-300" : null
                      /* index === s.selectedIndex && */
                      // isSelected ? '!text-primary-content text-shadow' : 'bg-base-300',
                      // !isSelected && 'active:bg-base-100',
                      // isSelected && 'bg-primary text-primary-content hover:text-neutral-content text-shadow-inv active:bg-primary', // prettier-ignore
                    ],
                    children: [
                      /* @__PURE__ */ jsx(InputBoolUI, { active: isSelected, expand: false }),
                      /* @__PURE__ */ jsx("div", { tw: "pl-0.5 flex h-full items-center truncate", children: s.p.getLabelUI ? s.p.getLabelUI(option) : s.p.getLabelText(option) })
                    ]
                  }
                )
              },
              index
            );
          })
        ] })
      }
    ),
    document.getElementById("tooltip-root")
  );
});

// src/controls/widgets/choices/WidgetChoicesUI.tsx
import { observer as observer18 } from "mobx-react-lite";
var WidgetChoices_HeaderUI = observer18(function WidgetChoices_LineUI_(p) {
  if (p.widget.config.appearance === "tab")
    return /* @__PURE__ */ jsx(WidgetChoices_TabHeaderUI, { widget: p.widget });
  else
    return /* @__PURE__ */ jsx(WidgetChoices_SelectHeaderUI, { widget: p.widget });
});
var WidgetChoices_BodyUI = observer18(function WidgetChoices_BodyUI_(p) {
  const widget = p.widget;
  const activeSubwidgets = Object.entries(widget.children).map(([branch, subWidget]) => ({ branch, subWidget }));
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(AnimatedSizeUI, { children: /* @__PURE__ */ jsx(
    "div",
    {
      tw: [widget.config.layout === "H" ? "flex" : null],
      className: widget.config.className,
      children: activeSubwidgets.map((val) => {
        const subWidget = val.subWidget;
        if (subWidget == null)
          return /* @__PURE__ */ jsx(Fragment, { children: "\u274C error" });
        return /* @__PURE__ */ jsx(
          WidgetWithLabelUI,
          {
            rootKey: val.branch,
            widget: subWidget,
            label: widget.isSingle ? false : void 0
          },
          val.branch
        );
      })
    }
  ) }) });
});
var WidgetChoices_TabHeaderUI = observer18(function WidgetChoicesTab_LineUI_(p) {
  const widget = p.widget;
  const choices = widget.choicesWithLabels;
  return /* @__PURE__ */ jsx(
    "div",
    {
      style: {
        justifyContent: widget.config.tabPosition === "start" ? "flex-start" : widget.config.tabPosition === "center" ? "center" : widget.config.tabPosition === "end" ? "flex-end" : "flex-end"
      },
      tw: "rounded select-none flex flex-1 flex-wrap gap-x-0.5 gap-y-0",
      children: choices.map((c) => {
        const isSelected = widget.serial.branches[c.key];
        return /* @__PURE__ */ jsx(
          InputBoolUI,
          {
            active: isSelected,
            display: "button",
            text: c.label,
            onValueChange: (value) => {
              if (value != isSelected) {
                widget.toggleBranch(c.key);
              }
            }
          },
          c.key
        );
      })
    }
  );
});
var WidgetChoices_SelectHeaderUI = observer18(function WidgetChoices_SelectLineUI_(p) {
  const widget = p.widget;
  const choices = widget.choicesWithLabels;
  return /* @__PURE__ */ jsx(
    "div",
    {
      tw: [
        //
        "relative",
        p.widget.expand || p.widget.config.alignLabel ? "w-full" : "w-64"
      ],
      onMouseDown: (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
      },
      children: /* @__PURE__ */ jsx(
        SelectUI,
        {
          tw: "flex-grow",
          placeholder: p.widget.config.placeholder,
          value: () => Object.entries(widget.serial.branches).filter(([_, value]) => value).map(([key, _]) => ({ key, label: choices.find((v) => v.key === key)?.label ?? key })),
          options: () => choices,
          getLabelText: (v) => v.label,
          getLabelUI: (v) => /* @__PURE__ */ jsx("div", { tw: "flex flex-1 justify-between", children: /* @__PURE__ */ jsx("div", { tw: "flex-1", children: v.label }) }),
          equalityCheck: (a, b) => a.key === b.key,
          multiple: widget.config.multi ?? false,
          closeOnPick: false,
          resetQueryOnPick: false,
          onChange: (v) => widget.toggleBranch(v.key)
        }
      )
    }
  );
});

// src/controls/widgets/choices/WidgetChoices.tsx
import { makeAutoObservable as makeAutoObservable6 } from "mobx";
import { nanoid as nanoid4 } from "nanoid";
var Widget_choices = class {
  constructor(form, parent, config, serial) {
    this.form = form;
    this.parent = parent;
    this.config = config;
    this.DefaultHeaderUI = WidgetChoices_HeaderUI;
    this.DefaultBodyUI = WidgetChoices_BodyUI;
    /* override */
    this.background = true;
    this.type = "choices";
    this.expand = this.config.expand ?? false;
    this.children = {};
    this.id = serial?.id ?? nanoid4();
    if (typeof config.items === "function") {
      toastError('\u{1F534} ChoicesWidget "items" property should now be an object, not a function');
      debugger;
    }
    this.serial = serial ?? {
      type: "choices",
      id: this.id,
      active: true,
      values_: {},
      branches: {}
    };
    const allBranches = Object.keys(config.items);
    const def = this.config.default;
    const isMulti = this.config.multi;
    if (isMulti) {
      for (const branch of allBranches) {
        const isActive = this.serial.branches[branch] ?? (typeof def === "string" ? branch === def : typeof def === "object" ? def?.[branch] ?? false : null);
        if (isActive)
          this.enableBranch(branch, { skipBump: true });
      }
    } else {
      const allBranches2 = Object.keys(this.config.items);
      const activeBranch = allBranches2.find((x) => this.serial.branches[x]) ?? (def == null ? allBranches2[0] : typeof def === "string" ? def : typeof def === "object" ? Object.entries(def).find(([, v]) => v)?.[0] ?? allBranches2[0] : allBranches2[0]);
      if (activeBranch == null)
        toastError(`\u274C No active branch found for single choice widget "${this.config.label}"`);
      else
        this.enableBranch(activeBranch, { skipBump: true });
    }
    applyWidgetMixinV2(this);
    makeAutoObservable6(this);
  }
  get isMulti() {
    return this.config.multi;
  }
  get isSingle() {
    return !this.config.multi;
  }
  get firstChoice() {
    return this.choices[0];
  }
  get choices() {
    return Object.keys(this.config.items);
  }
  get choicesWithLabels() {
    return Object.entries(this.config.items).map(([key, spec]) => ({
      key,
      // note:
      // if child.config.label === false => makeLabelFromFieldName(key)
      // if child.config.label === '' => makeLabelFromFieldName(key)
      label: spec.config.label || makeLabelFromFieldName(key)
    }));
  }
  /** array of all active branch keys */
  get activeBranches() {
    return Object.keys(this.serial.branches).filter((x) => this.serial.branches[x]);
  }
  get firstActiveBranchName() {
    return this.activeBranches[0];
  }
  get firstActiveBranchWidget() {
    if (this.firstActiveBranchName == null)
      return void 0;
    return this.children[this.firstActiveBranchName];
  }
  toggleBranch(branch) {
    if (this.children[branch]) {
      if (this.isMulti)
        this.disableBranch(branch);
    } else
      this.enableBranch(branch);
  }
  disableBranch(branch, p) {
    if (!this.children[branch])
      throw new Error(`\u274C Branch "${branch}" not enabled`);
    delete this.children[branch];
    this.serial.branches[branch] = false;
    if (!p?.skipBump)
      this.bumpValue();
  }
  enableBranch(branch, p) {
    if (!this.config.multi) {
      for (const key in this.children) {
        this.disableBranch(key);
      }
    }
    if (this.children[branch])
      throw new Error(`\u274C Branch "${branch}" already enabled`);
    let schema = this.config.items[branch];
    if (typeof schema === "function")
      schema = schema();
    if (schema == null)
      throw new Error(`\u274C Branch "${branch}" has no initializer function`);
    const prevBranchSerial = this.serial.values_?.[branch];
    if (prevBranchSerial && schema.type === prevBranchSerial.type) {
      this.children[branch] = this.form.builder._HYDRATE(this, schema, prevBranchSerial);
    } else {
      this.children[branch] = this.form.builder._HYDRATE(this, schema, null);
      this.serial.values_[branch] = this.children[branch]?.serial;
    }
    this.serial.branches[branch] = true;
    if (!p?.skipBump)
      this.bumpValue();
  }
  /** results, but only for active branches */
  get value() {
    const out = {};
    for (const branch in this.children) {
      out[branch] = this.children[branch].value;
    }
    return out;
  }
};
registerWidgetClass("choices", Widget_choices);

// src/controls/widgets/color/WidgetColorUI.tsx
import { observer as observer19 } from "mobx-react-lite";
var WidgetColorUI = observer19(function WidgetColorUI_(p) {
  const widget = p.widget;
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        value: widget.serial.value,
        type: "color",
        onChange: (ev) => widget.value = ev.target.value
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        tw: [widget.isChanged ? void 0 : "btn-disabled opacity-50"],
        onClick: () => widget.reset(),
        className: "btn btn-xs btn-narrower btn-ghost",
        children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "undo" })
      }
    )
  ] });
});

// src/controls/widgets/color/WidgetColor.tsx
import { makeAutoObservable as makeAutoObservable7, runInAction as runInAction5 } from "mobx";
import { nanoid as nanoid5 } from "nanoid";
var Widget_color = class {
  constructor(form, parent, config, serial) {
    this.form = form;
    this.parent = parent;
    this.config = config;
    this.DefaultHeaderUI = WidgetColorUI;
    this.DefaultBodyUI = void 0;
    this.type = "color";
    this.defaultValue = this.config.default ?? "#000000";
    // prettier-ignore
    this.reset = () => this.value = this.defaultValue;
    this.id = serial?.id ?? nanoid5();
    this.serial = serial ?? {
      type: "color",
      collapsed: config.startCollapsed,
      id: this.id,
      value: config.default ?? "#000000"
    };
    applyWidgetMixinV2(this);
    makeAutoObservable7(this);
  }
  get isChanged() {
    return this.value !== this.defaultValue;
  }
  get value() {
    return this.serial.value;
  }
  set value(next) {
    if (this.serial.value === next)
      return;
    runInAction5(() => {
      this.serial.value = next;
      this.bumpValue();
    });
  }
};
registerWidgetClass("color", Widget_color);

// src/controls/widgets/group/WidgetGroup.tsx
import { makeAutoObservable as makeAutoObservable8 } from "mobx";
import { nanoid as nanoid6 } from "nanoid";
var Widget_group = class {
  constructor(form, parent, config, serial, preHydrate) {
    this.form = form;
    this.parent = parent;
    this.config = config;
    this.DefaultHeaderUI = WidgetGroup_LineUI;
    this.type = "group";
    this.collapseAllEntries = () => {
      for (const [key, _item] of this.entries) {
        const item = getActualWidgetToDisplay(_item);
        if (item.serial.collapsed)
          continue;
        const isCollapsible = getIfWidgetIsCollapsible(item);
        if (isCollapsible)
          item.setCollapsed(true);
      }
    };
    this.expandAllEntries = () => {
      for (const [key, _item] of this.entries) {
        const item = getActualWidgetToDisplay(_item);
        item.setCollapsed(void 0);
      }
    };
    this.at = (key) => this.fields[key];
    this.get = (key) => this.fields[key].value;
    /** the dict of all child widgets */
    this.fields = {};
    // will be filled during constructor
    this.serial = {};
    /* override */
    this.background = true;
    this._defaultSerial = () => {
      return {
        type: "group",
        id: this.id,
        collapsed: this.config.startCollapsed,
        values_: {}
      };
    };
    this.value = new Proxy({}, {
      get: (target, prop) => {
        if (typeof prop !== "string")
          return;
        const subWidget = this.fields[prop];
        if (subWidget == null)
          return;
        return subWidget.value;
      }
    });
    this.id = serial?.id ?? nanoid6();
    this.serial = serial && serial.type === "group" ? serial : this._defaultSerial();
    if (this.serial.values_ == null)
      this.serial.values_ = {};
    preHydrate?.(this);
    const prevFieldSerials = this.serial.values_;
    const itemsDef = this.config.items;
    const _newValues = typeof itemsDef === "function" ? runWithGlobalForm(this.form.builder, itemsDef) ?? {} : itemsDef ?? {};
    const childKeys = Object.keys(_newValues);
    for (const key of childKeys) {
      const unmounted = bang(_newValues[key]);
      const prevFieldSerial = prevFieldSerials[key];
      if (prevFieldSerial && unmounted.type === prevFieldSerial.type) {
        this.fields[key] = this.form.builder._HYDRATE(this, unmounted, prevFieldSerial);
      } else {
        if (prevFieldSerial != null)
          console.log(
            `[\u{1F536}] invalid serial for "${key}": (${unmounted.type} != ${prevFieldSerial?.type}) => using fresh one instead`,
            prevFieldSerials
          );
        this.fields[key] = this.form.builder._HYDRATE(this, unmounted, null);
        this.serial.values_[key] = this.fields[key].serial;
      }
    }
    applyWidgetMixinV2(this);
    makeAutoObservable8(this, { value: false });
  }
  get DefaultBodyUI() {
    if (Object.keys(this.fields).length === 0)
      return;
    return WidgetGroup_BlockUI;
  }
  static {
    this.Prop = (config) => new Spec("group", config);
  }
  get summary() {
    return this.config.summary?.(this.value) ?? "";
  }
  /** all [key,value] pairs */
  get entries() {
    return Object.entries(this.fields);
  }
  // 💬 2024-03-13 rvion: no setter for groups; groups can not be set; only their child can
};
registerWidgetClass("group", Widget_group);

// src/controls/widgets/list/ListControlsUI.tsx
import { observer as observer20 } from "mobx-react-lite";
var ListControlsUI = observer20(function ListControlsUI_(p) {
  const widget = p.widget;
  const max = widget.config.max;
  const min = widget.config.min;
  const canAdd = max ? widget.items.length < max : true;
  const canClear = min ? widget.items.length > min : true;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      tw: "sticky top-0 flex gap-1 z-[50] w-full",
      onMouseDown: (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
      },
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            tw: [!canAdd && "btn-disabled", "btn btn-xs btn-narrow btn-ghost"],
            onClick: (ev) => {
              if (!canAdd)
                return;
              ev.stopPropagation();
              widget.addItem();
            },
            children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "add" })
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            tw: [!canClear && "btn-disabled", "btn btn-xs btn-narrow btn-ghost"],
            onClick: (ev) => {
              if (!canClear)
                return;
              ev.stopPropagation();
              widget.removeAllItems();
            },
            children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "delete_forever" })
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            tw: ["btn btn-xs btn-narrow btn-ghost"],
            onClick: (ev) => {
              ev.stopPropagation();
              widget.expandAllItems();
            },
            children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "unfold_more" })
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            tw: ["btn btn-xs btn-narrow btn-ghost"],
            onClick: (ev) => {
              ev.stopPropagation();
              widget.collapseAllItems();
            },
            children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "unfold_less" })
          }
        )
      ]
    }
  );
});

// src/controls/widgets/list/WidgetListUI.tsx
import { observer as observer21 } from "mobx-react-lite";
import { forwardRef } from "react";
import SortableList, { SortableItem, SortableKnob } from "react-easy-sort";
import { ErrorBoundary as ErrorBoundary2 } from "react-error-boundary";
var WidgetList_LineUI = observer21(function WidgetList_LineUI_(p) {
  return /* @__PURE__ */ jsxs("div", { tw: "flex flex-1 items-center", children: [
    /* @__PURE__ */ jsxs("div", { tw: "text-sm text-gray-500 italic", children: [
      p.widget.length,
      " items"
    ] }),
    /* @__PURE__ */ jsx("div", { tw: "ml-auto", children: /* @__PURE__ */ jsx(ListControlsUI, { widget: p.widget }) })
  ] });
});
var WidgetList_BodyUI = observer21(function WidgetList_BodyUI_(p) {
  const widget = p.widget;
  const subWidgets = widget.items;
  const min = widget.config.min;
  return /* @__PURE__ */ jsx("div", { className: "_WidgetListUI", tw: "flex-grow w-full", children: /* @__PURE__ */ jsx(SortableList, { onSortEnd: p.widget.moveItem, className: "list", draggedItemClassName: "dragged", children: /* @__PURE__ */ jsx("div", { tw: "flex flex-col gap-0.5", children: subWidgets.map((subWidget, ix) => {
    const widgetHeader = subWidget.header();
    const widgetBody = subWidget.body();
    const collapsed = subWidget.serial.collapsed ?? false;
    return /* @__PURE__ */ jsx(SortableItem, { children: /* @__PURE__ */ jsxs("div", { tw: ["flex flex-col", getBorderStatusForWidget(subWidget) && "WIDGET-GROUP-BORDERED"], children: [
      /* @__PURE__ */ jsxs("div", { tw: "flex items-center ", children: [
        /* @__PURE__ */ jsx(SortableKnob, { children: /* @__PURE__ */ jsx(ListDragHandleUI, { widget: subWidget, ix }) }),
        p.widget.config.showID ? /* @__PURE__ */ jsx("div", { className: "divider flex-1 border-top", children: /* @__PURE__ */ jsxs("div", { id: subWidget.id, tw: "opacity-20 italic", children: [
          "#",
          ix,
          ":",
          subWidget.id
        ] }) }) : null,
        widgetHeader && /* @__PURE__ */ jsx(ErrorBoundary2, { FallbackComponent: ErrorBoundaryFallback, onReset: (details) => {
        }, children: widgetHeader }),
        /* @__PURE__ */ jsx(
          "div",
          {
            tw: [
              "btn btn-sm btn-narrower btn-ghost opacity-50",
              min && widget.items.length <= min ? "btn-disabled" : null
            ],
            onClick: () => widget.removeItem(subWidget),
            children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "delete" })
          }
        ),
        /* @__PURE__ */ jsx(ListItemCollapseBtnUI, { widget: subWidget })
      ] }),
      widgetBody && !collapsed && subWidget && /* @__PURE__ */ jsx(ErrorBoundary2, { FallbackComponent: ErrorBoundaryFallback, onReset: (details) => {
      }, children: /* @__PURE__ */ jsx("div", { tw: "ml-2 pl-2", children: widgetBody }) })
    ] }) }, subWidget.id);
  }) }) }) });
});
var ListDragHandleUI = forwardRef((p, ref) => {
  const widget = p.widget;
  return /* @__PURE__ */ jsx("div", { tw: "btn btn-narrower btn-ghost btn-square btn-xs", ref, onClick: () => widget.toggleCollapsed(), children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "menu" }) });
});
var ListItemCollapseBtnUI = observer21(function ListItemCollapseBtnUI_(p) {
  const widget = p.widget;
  const isCollapsible = widget.DefaultBodyUI;
  if (!isCollapsible)
    return null;
  return /* @__PURE__ */ jsx(
    "div",
    {
      tw: "btn btn-ghost btn-square btn-sm",
      onClick: () => widget.toggleCollapsed(),
      children: widget.serial.collapsed ? (
        //
        /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "keyboard_arrow_right" })
      ) : /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "keyboard_arrow_down" })
    }
  );
});

// src/controls/widgets/list/WidgetList.ts
import { makeAutoObservable as makeAutoObservable9, observable as observable5 } from "mobx";
import { nanoid as nanoid7 } from "nanoid";
var Widget_list = class {
  constructor(form, parent, config, serial) {
    this.form = form;
    this.parent = parent;
    this.config = config;
    this.DefaultHeaderUI = WidgetList_LineUI;
    this.type = "list";
    /* override */
    this.background = true;
    this.findItemIndexContaining = (widget) => {
      let at = widget;
      let child = at;
      while (at != null) {
        at = at.parent;
        if (at === this) {
          return this.items.indexOf(child);
        }
        child = at;
      }
      return null;
    };
    this.schemaAt = (ix) => {
      const _schema = this.config.element;
      const schema = typeof _schema === "function" ? runWithGlobalForm(this.form.builder, () => _schema(ix)) : _schema;
      return schema;
    };
    // HELPERS =======================================================
    // FOLDING -------------------------------------------------------
    this.collapseAllItems = () => {
      for (const i of this.items)
        i.setCollapsed(true);
    };
    this.expandAllItems = () => {
      for (const i of this.items)
        i.setCollapsed(false);
    };
    // REMOVING ITEMS ------------------------------------------------
    this.removeAllItems = () => {
      if (this.length === 0)
        return console.log(`[\u{1F536}] list.removeAllItems: list is already empty`);
      const minLen = this.config.min ?? 0;
      if (this.length <= minLen)
        return console.log(`[\u{1F536}] list.removeAllItems: list is already at min lenght`);
      this.serial.items_ = this.serial.items_.slice(0, minLen);
      this.items = this.items.slice(0, minLen);
      this.bumpValue();
    };
    this.removeItem = (item) => {
      const i = this.items.indexOf(item);
      if (i === -1)
        return console.log(`[\u{1F536}] list.removeItem: item not found`);
      this.serial.items_.splice(i, 1);
      this.items.splice(i, 1);
      this.bumpValue();
    };
    // MOVING ITEMS ---------------------------------------------------
    this.moveItem = (oldIndex, newIndex) => {
      if (oldIndex === newIndex)
        return console.log(`[\u{1F536}] list.moveItem: oldIndex === newIndex`);
      if (oldIndex < 0 || oldIndex >= this.length)
        return console.log(`[\u{1F536}] list.moveItem: oldIndex out of bounds`);
      if (newIndex < 0 || newIndex >= this.length)
        return console.log(`[\u{1F536}] list.moveItem: newIndex out of bounds`);
      const serials = this.serial.items_;
      serials.splice(newIndex, 0, bang(serials.splice(oldIndex, 1)[0]));
      const instances = this.items;
      instances.splice(newIndex, 0, bang(instances.splice(oldIndex, 1)[0]));
      this.bumpValue();
    };
    this.id = serial?.id ?? nanoid7();
    this.serial = serial ?? observable5({ type: "list", id: this.id, active: true, items_: [] });
    if (this.serial.items_ == null)
      this.serial.items_ = [];
    this.items = [];
    if (serial == null && this.config.defaultLength != null) {
      for (let i = 0; i < this.config.defaultLength; i++)
        this.addItem({ skipBump: true });
    } else {
      const unmounted = this.schemaAt(0);
      for (const subSerial of this.serial.items_) {
        if (subSerial == null || // ⁉️ when can this happen ?
        subSerial.type !== unmounted.type) {
          console.log(`[\u274C] SKIPPING form item because it has an incompatible entry from a previous app definition`);
          continue;
        }
        const subWidget = form.builder._HYDRATE(this, unmounted, subSerial);
        this.items.push(subWidget);
      }
    }
    const missingItems = (this.config.min ?? 0) - this.items.length;
    for (let i = 0; i < missingItems; i++)
      this.addItem({ skipBump: true });
    applyWidgetMixinV2(this);
    makeAutoObservable9(this);
  }
  get DefaultBodyUI() {
    return WidgetList_BodyUI;
  }
  get length() {
    return this.items.length;
  }
  get value() {
    return this.items.map((i) => i.value);
  }
  // ERRORS --------------------------------------------------------
  get errors() {
    let out = [];
    if (this.config.min != null && this.length < this.config.min) {
      out.push(`List is too short`);
    }
    if (this.config.max != null && this.length > this.config.max) {
      out.push(`List is too long`);
    }
    return out;
  }
  // ADDING ITEMS -------------------------------------------------
  addItem(p) {
    if (this.config.max != null && this.items.length >= this.config.max)
      return console.log(`[\u{1F536}] list.addItem: list is already at max length`);
    const schema = this.schemaAt(this.serial.items_.length);
    const element = this.form.builder._HYDRATE(this, schema, null);
    this.items.push(element);
    this.serial.items_.push(element.serial);
    if (!p?.skipBump)
      this.bumpValue();
  }
};
registerWidgetClass("list", Widget_list);

// src/controls/widgets/markdown/WidgetMarkdownUI.tsx
import { observer as observer22 } from "mobx-react-lite";
var WidgetMardownUI = observer22(function WidgetMardownUI_(p) {
  const widget = p.widget;
  return /* @__PURE__ */ jsx(MarkdownUI, { tw: [widget.config.inHeader && "bg-base-300", "_WidgetMardownUI w-full"], markdown: widget.markdown });
});

// src/controls/widgets/markdown/WidgetMarkdown.ts
import { makeAutoObservable as makeAutoObservable10 } from "mobx";
import { nanoid as nanoid8 } from "nanoid";
var Widget_markdown = class {
  constructor(form, parent, config, serial) {
    this.form = form;
    this.parent = parent;
    this.config = config;
    this.type = "markdown";
    this.id = serial?.id ?? nanoid8();
    this.serial = serial ?? { type: "markdown", collapsed: config.startCollapsed, active: true, id: this.id };
    applyWidgetMixinV2(this);
    makeAutoObservable10(this);
  }
  get DefaultHeaderUI() {
    if (this.config.inHeader)
      return WidgetMardownUI;
    return void 0;
  }
  get DefaultBodyUI() {
    if (this.config.inHeader)
      return void 0;
    return WidgetMardownUI;
  }
  get alignLabel() {
    if (this.config.inHeader)
      return false;
  }
  get markdown() {
    const md = this.config.markdown;
    if (typeof md === "string")
      return md;
    return md(this.form._ROOT);
  }
  get value() {
    return this.serial;
  }
};
registerWidgetClass("markdown", Widget_markdown);

// src/controls/widgets/matrix/WidgetMatrixUI.tsx
import { observer as observer23 } from "mobx-react-lite";
var WidgetMatrixUI = observer23(function WidgetStrUI_(p) {
  const widget = p.widget;
  const cols = widget.cols;
  const rows = widget.rows;
  if (cols.length === 0)
    return /* @__PURE__ */ jsx("div", { children: "\u274C no cols" });
  if (rows.length === 0)
    return /* @__PURE__ */ jsx("div", { children: "\u274C no rows" });
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("table", { cellSpacing: 0, cellPadding: 0, children: [
    /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
      /* @__PURE__ */ jsx(
        "th",
        {
          className: "cursor-pointer hover:text-red-600 virtualBorder",
          onClick: () => widget.setAll(!widget.firstValue),
          children: "all"
        }
      ),
      cols.map((col, ix) => /* @__PURE__ */ jsx(
        "th",
        {
          className: "bg-base-200 virtualBorder",
          onClick: () => widget.setCol(col, !widget.get(rows[0], col).value),
          children: col
        },
        ix
      ))
    ] }) }),
    /* @__PURE__ */ jsx("tbody", { children: rows.map((row, rowIx) => /* @__PURE__ */ jsxs("tr", { className: "p-0 m-0", children: [
      /* @__PURE__ */ jsx(
        "td",
        {
          onClick: () => widget.setRow(row, !widget.get(row, cols[0]).value),
          className: "bg-base-302 virtualBorder cursor-pointer",
          children: row
        }
      ),
      cols.map((col, colIx) => {
        const checked = widget.get(row, col).value;
        return /* @__PURE__ */ jsx(
          "td",
          {
            className: "hover:bg-gray-400 cursor-pointer virtualBorder",
            onClick: () => widget.set(row, col, !checked),
            tw: [checked ? void 0 : "bg-base-200"],
            style: {
              background: checked ? "oklch(var(--p)/.5)" : void 0,
              height: "2rem",
              width: "2rem"
            }
          },
          colIx
        );
      })
    ] }, rowIx)) })
  ] }) });
});

// src/controls/widgets/matrix/WidgetMatrix.ts
import { makeAutoObservable as makeAutoObservable11 } from "mobx";
import { nanoid as nanoid9 } from "nanoid";
var Widget_matrix = class {
  constructor(form, parent, config, serial) {
    this.form = form;
    this.parent = parent;
    this.config = config;
    this.DefaultHeaderUI = WidgetMatrixUI;
    this.DefaultBodyUI = void 0;
    this.type = "matrix";
    this.alignLabel = false;
    this.sep = " &&& ";
    this.store = /* @__PURE__ */ new Map();
    this.key = (row, col) => `${row}${this.sep}${col}`;
    // prettier-ignore
    this.UPDATE = () => {
      this.serial.selected = this.RESULT;
      this.bumpValue();
    };
    this.setAll = (value) => {
      for (const v of this.allCells)
        v.value = value;
      this.UPDATE();
    };
    this.setRow = (row, val) => {
      for (const v of this.cols) {
        const cell = this.get(row, v);
        cell.value = val;
      }
      this.UPDATE();
    };
    this.setCol = (col, val) => {
      for (const r of this.rows) {
        const cell = this.get(r, col);
        cell.value = val;
      }
      this.UPDATE();
    };
    this.get = (row, col) => {
      return bang(this.store.get(this.key(row, col)));
    };
    this.set = (row, col, value) => {
      const cell = this.get(row, col);
      cell.value = value;
      this.UPDATE();
    };
    this.id = serial?.id ?? nanoid9();
    this.serial = serial ?? { type: "matrix", collapsed: config.startCollapsed, id: this.id, active: true, selected: [] };
    const rows = config.rows;
    const cols = config.cols;
    for (const [rowIx, row] of rows.entries()) {
      for (const [colIx, col] of cols.entries()) {
        this.store.set(this.key(row, col), { x: rowIx, y: colIx, col, row, value: false });
      }
    }
    const values = this.serial.selected;
    if (values)
      for (const v of values) {
        this.store.set(this.key(rows[v.x], cols[v.y]), v);
      }
    this.rows = config.rows;
    this.cols = config.cols;
    applyWidgetMixinV2(this);
    makeAutoObservable11(this);
  }
  get value() {
    return this.serial.selected;
  }
  get allCells() {
    return Array.from(this.store.values());
  }
  get RESULT() {
    return this.allCells.filter((v) => v.value);
  }
  get firstValue() {
    return this.allCells[0]?.value ?? false;
  }
};
registerWidgetClass("matrix", Widget_matrix);

// src/utils/misc/parseFloatNoRoundingErr.ts
var parseFloatNoRoundingErr = (str, maxDigitsAfterDot = 3) => {
  const result = typeof str === "number" ? str : parseFloat(str);
  if (isNaN(result))
    return 0;
  const out = Number(result.toFixed(maxDigitsAfterDot));
  return out;
};

// src/controls/widgets/number/InputNumberUI.tsx
import { makeAutoObservable as makeAutoObservable12, runInAction as runInAction6 } from "mobx";
import { observer as observer24 } from "mobx-react-lite";
import React2, { useEffect as useEffect2, useMemo as useMemo4 } from "react";
var clamp = (x, min, max) => Math.max(min, Math.min(max, x));
var startValue = 0;
var dragged = false;
var cumulativeOffset = 0;
var lastShiftState = false;
var lastControlState = false;
var lastValue = 0;
var activeSlider = null;
var cancelled = false;
var InputNumberStableState = class {
  constructor(props) {
    this.props = props;
    // prettier-ignore
    /* Used for making sure you can type whatever you want in to the value, but it gets validated when pressing Enter. */
    this.inputValue = this.value.toString();
    /* When editing the number <input> this will make it display inputValue instead of val.*/
    this.isEditing = false;
    this.inputRef = React2.createRef();
    this.syncValues = (value, opts = {}) => {
      const soft = opts.soft ?? false;
      const roundingModifier = opts.roundingModifier ?? 1;
      const skipRounding = opts.skipRounding ?? false;
      let num = typeof value === "string" ? this.mode == "int" ? parseInt(value, 10) : parseFloat(value) : value;
      if (isNaN(num) || typeof num != "number") {
        console.log(`${JSON.stringify(value)} is not a number`);
        return startValue;
      }
      if (this.forceSnap) {
        num = this.mode == "int" ? Math.round(num / this.step) * this.step : num;
      }
      if (this.mode === "int")
        num = Math.round(num);
      if (soft && startValue <= this.rangeMax && startValue >= this.rangeMin) {
        num = clamp(num, this.rangeMin, this.rangeMax);
      } else {
        num = clamp(num, this.props.min ?? -Infinity, this.props.max ?? Infinity);
      }
      if (!skipRounding) {
        const roundingPrecise = Math.ceil(-Math.log10(this.step * 0.01 * roundingModifier));
        num = parseFloatNoRoundingErr(num, roundingPrecise);
      }
      this.props.onValueChange(num);
      this.inputValue = num.toString();
    };
    this.increment = () => {
      startValue = this.value;
      let num = this.value + (this.isInteger ? this.step : this.step * 0.1);
      this.syncValues(num, { soft: true });
    };
    this.decrement = () => {
      startValue = this.value;
      let num = this.value - (this.isInteger ? this.step : this.step * 0.1);
      this.syncValues(num, { soft: true });
    };
    this.mouseMoveListener = (e) => {
      if (dragged && (lastShiftState !== e.shiftKey || lastControlState !== e.ctrlKey)) {
        startValue = lastValue;
        cumulativeOffset = 0;
      }
      dragged = true;
      cumulativeOffset += e.movementX;
      let precision = (e.shiftKey ? 1e-3 : 0.01) * this.step;
      let offset = this.numberSliderSpeed * cumulativeOffset * precision;
      const next = startValue + offset;
      let num = typeof next === "string" ? this.mode == "int" ? parseInt(next, 10) : parseFloatNoRoundingErr(next, this.rounding) : next;
      if (e.ctrlKey) {
        const inverval = e.shiftKey ? 0.1 * this.step : this.step;
        num = Math.round(num / inverval) * inverval;
      }
      lastShiftState = e.shiftKey;
      lastControlState = e.ctrlKey;
      lastValue = num;
      this.syncValues(num, { soft: true, roundingModifier: e.shiftKey ? 0.01 : 1 });
    };
    this.cancelListener = (e) => {
      if (e.button == 2) {
        activeSlider = null;
        document.exitPointerLock();
      }
    };
    this.onPointerUpListener = () => {
      if (activeSlider && !dragged) {
        this.inputRef.current?.focus();
      } else {
        activeSlider = null;
      }
      window.removeEventListener("pointerup", this.onPointerUpListener, true);
      window.removeEventListener("pointerlockchange", this.onPointerLockChange, true);
      window.removeEventListener("mousemove", this.mouseMoveListener, true);
      window.removeEventListener("mousedown", this.cancelListener, true);
      document.exitPointerLock();
    };
    this.onPointerLockChange = (e) => {
      const isPointerLocked = document.pointerLockElement === activeSlider;
      if (!(activeSlider && isPointerLocked)) {
        window.removeEventListener("mousemove", this.mouseMoveListener, true);
        window.removeEventListener("mousedown", this.cancelListener, true);
        this.syncValues(startValue);
      }
    };
    makeAutoObservable12(this);
  }
  get value() {
    return this.props.value ?? clamp(1, this.props.min ?? -Infinity, this.props.max ?? Infinity);
  }
  // prettier-ignore
  get mode() {
    return this.props.mode;
  }
  // prettier-ignore
  get step() {
    return this.props.step ?? (this.mode === "int" ? 1 : 0.1);
  }
  // prettier-ignore
  get rounding() {
    return Math.ceil(-Math.log10(this.step * 0.01));
  }
  // prettier-ignore
  get forceSnap() {
    return this.props.forceSnap ?? false;
  }
  // prettier-ignore
  get rangeMin() {
    return this.props.softMin ?? this.props.min ?? -Infinity;
  }
  // prettier-ignore
  get rangeMax() {
    return this.props.softMax ?? this.props.max ?? Infinity;
  }
  // prettier-ignore
  get numberSliderSpeed() {
    return cushy.configFile.get("numberSliderSpeed") ?? 1;
  }
  // prettier-ignore
  get isInteger() {
    return this.mode === "int";
  }
};
var InputNumberUI = observer24(function InputNumberUI_(p) {
  const uist = useMemo4(() => new InputNumberStableState(p), []);
  runInAction6(() => Object.assign(uist.props, p));
  useEffect2(() => uist.onPointerUpListener, []);
  const val = uist.value;
  const step = uist.step;
  const rounding = uist.rounding;
  const isEditing = uist.isEditing;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: p.className,
      tw: [
        "WIDGET-FIELD relative",
        "input-number-ui custom-roundness",
        "flex-1 select-none min-w-16 cursor-ew-resize overflow-clip",
        "bg-primary/30 border border-base-100 border-b-2 border-b-base-200",
        !isEditing && "hover:border-base-200 hover:border-b-base-300 hover:bg-primary/40"
      ],
      onWheel: (ev) => {
        if (ev.ctrlKey) {
          let num = uist.isInteger ? step * -Math.sign(ev.deltaY) : step * -Math.sign(ev.deltaY) * 0.1;
          num = val + num;
          num = uist.isInteger ? Math.round(num) : parseFloatNoRoundingErr(num, rounding);
          num = clamp(num, p.min ?? -Infinity, p.max ?? Infinity);
          uist.syncValues(num, void 0);
        }
      },
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "inui-foreground",
            tw: [
              //
              "absolute left-0 WIDGET-FIELD",
              !p.hideSlider && !isEditing && "bg-primary/40",
              "z-10"
            ],
            style: { width: `${(val - uist.rangeMin) / (uist.rangeMax - uist.rangeMin) * 100}%` }
          }
        ),
        /* @__PURE__ */ jsxs("div", { tw: "grid w-full h-full items-center z-20", style: { gridTemplateColumns: "16px 1fr 16px" }, children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              tw: [
                "h-full flex rounded-none text-center justify-center items-center z-20",
                `border border-base-200 opacity-0 bg-base-200 hover:brightness-125`
              ],
              tabIndex: -1,
              onClick: uist.decrement,
              children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "arrow_left" })
            }
          ),
          /* @__PURE__ */ jsxs(
            "div",
            {
              tw: [
                //
                `flex px-1 items-center justify-center text-sm text-shadow truncate z-20`
              ],
              onMouseDown: (ev) => {
                if (isEditing || ev.button != 0)
                  return;
                activeSlider = ev.currentTarget;
                startValue = val;
                cumulativeOffset = 0;
                dragged = false;
                window.addEventListener("mousemove", uist.mouseMoveListener, true);
                window.addEventListener("pointerup", uist.onPointerUpListener, true);
                window.addEventListener("pointerlockchange", uist.onPointerLockChange, true);
                window.addEventListener("mousedown", uist.cancelListener, true);
                activeSlider?.requestPointerLock({ unadjustedMovement: true }).catch((error) => {
                  console.log(
                    "[InputNumberUI] Obtaining raw mouse input is not supported on this platform. Using processed mouse input, you may need to adjust the number input drag multiplier."
                  );
                  activeSlider?.requestPointerLock();
                });
              },
              children: [
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    draggable: "false",
                    ref: uist.inputRef,
                    onDragStart: (ev) => ev.preventDefault(),
                    tw: [
                      "text-shadow outline-0",
                      /* `absolute opacity-0` is a bit of a hack around not being able to figure out why the input kept taking up so much width.
                       * Can't use `hidden` here because it messes up focusing. */
                      !isEditing && "cursor-not-allowed pointer-events-none absolute opacity-0",
                      !isEditing && p.text ? "text-right" : "text-center"
                    ],
                    value: isEditing ? uist.inputValue : val,
                    placeholder: p.placeholder,
                    style: {
                      fontFamily: "monospace",
                      zIndex: 2,
                      background: "transparent",
                      MozWindowDragging: "no-drag"
                    },
                    min: p.min,
                    max: p.max,
                    step,
                    onChange: (ev) => {
                      uist.inputValue = ev?.target.value;
                    },
                    onFocus: (ev) => {
                      let textInput = ev.currentTarget;
                      activeSlider = textInput.parentElement;
                      textInput.select();
                      startValue = val;
                      uist.inputValue = val.toString();
                      uist.isEditing = true;
                    },
                    onBlur: (ev) => {
                      uist.isEditing = false;
                      const next = ev.currentTarget.value;
                      activeSlider = null;
                      if (cancelled) {
                        cancelled = false;
                        uist.syncValues(startValue, void 0);
                        return;
                      }
                      uist.syncValues(ev.currentTarget.value, { skipRounding: true });
                    },
                    onKeyDown: (ev) => {
                      if (ev.key === "Enter") {
                        ev.currentTarget.blur();
                      } else if (ev.key === "Escape") {
                        cancelled = true;
                        ev.currentTarget.blur();
                      }
                      if (uist.isEditing) {
                        if (ev.key === "ArrowUp") {
                          uist.increment();
                          ev.preventDefault();
                        } else if (ev.key === "ArrowDown") {
                          uist.decrement();
                          ev.preventDefault();
                        } else {
                          ev.stopPropagation();
                        }
                      }
                    }
                  }
                ),
                !isEditing && /* @__PURE__ */ jsxs(Fragment, { children: [
                  p.text && /* @__PURE__ */ jsx(
                    "div",
                    {
                      tw: ["w-full pr-1 outline-0 border-0 border-transparent z-10 text-left truncate"],
                      children: p.text
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { style: { fontFamily: "monospace" }, children: p.value }),
                  !isEditing && p.suffix ? /* @__PURE__ */ jsx("div", { tw: "pl-0.5", children: p.suffix }) : /* @__PURE__ */ jsx(Fragment, {})
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              tw: [
                "h-full flex rounded-none text-center justify-center items-center z-20",
                `border border-base-200 opacity-0 bg-base-200 hover:brightness-125`
              ],
              tabIndex: -1,
              onClick: uist.increment,
              children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "arrow_right" })
            }
          )
        ] })
      ]
    }
  );
});

// src/controls/widgets/number/WidgetNumberUI.tsx
import { observer as observer25 } from "mobx-react-lite";
var WidgetNumberUI = observer25(function WidgetNumberUI_(p) {
  const widget = p.widget;
  const value = widget.serial.val;
  const mode = widget.config.mode;
  const step = widget.config.step ?? (mode === "int" ? 1 : 0.1);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      InputNumberUI,
      {
        mode,
        value,
        hideSlider: widget.config.hideSlider,
        max: widget.config.max,
        min: widget.config.min,
        softMin: widget.config.softMin,
        softMax: widget.config.softMax,
        step,
        suffix: widget.config.suffix,
        text: widget.config.text,
        onValueChange: (next) => widget.value = next,
        forceSnap: widget.config.forceSnap
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        tw: [widget.isChanged ? void 0 : "btn-disabled opacity-50"],
        onClick: () => widget.reset(),
        className: "btn btn-xs btn-narrower btn-ghost",
        children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "undo" })
      }
    )
  ] });
});

// src/controls/widgets/number/WidgetNumber.tsx
import { computed as computed2, makeObservable, observable as observable6, runInAction as runInAction7 } from "mobx";
import { nanoid as nanoid10 } from "nanoid";
var Widget_number = class {
  constructor(form, parent, config, serial) {
    this.form = form;
    this.parent = parent;
    this.config = config;
    this.DefaultHeaderUI = WidgetNumberUI;
    this.DefaultBodyUI = void 0;
    this.type = "number";
    this.forceSnap = false;
    this.defaultValue = this.config.default ?? 0;
    // prettier-ignore
    this.reset = () => {
      if (this.serial.val === this.defaultValue)
        return;
      this.value = this.defaultValue;
    };
    this.id = serial?.id ?? nanoid10();
    this.serial = serial ?? {
      type: "number",
      collapsed: config.startCollapsed,
      id: this.id,
      val: config.default ?? 0
    };
    applyWidgetMixinV2(this);
    makeObservable(this, {
      serial: observable6,
      value: computed2
    });
  }
  get isChanged() {
    return this.serial.val !== this.defaultValue;
  }
  set value(next) {
    if (this.serial.val === next)
      return;
    runInAction7(() => {
      this.serial.val = next;
      this.bumpValue();
    });
  }
  get value() {
    return this.serial.val;
  }
};
registerWidgetClass("number", Widget_number);

// src/controls/widgets/optional/WidgetOptional.tsx
import { computed as computed3, makeObservable as makeObservable2, observable as observable7 } from "mobx";
import { nanoid as nanoid11 } from "nanoid";
var Widget_optional = class {
  constructor(form, parent, config, serial) {
    this.form = form;
    this.parent = parent;
    this.config = config;
    this.DefaultHeaderUI = void 0;
    this.DefaultBodyUI = void 0;
    this.type = "optional";
    this.setActive = (value) => {
      if (this.serial.active === value)
        return;
      this.serial.active = value;
      this.bumpValue();
      if (value)
        this.child.setCollapsed(false);
      else
        this.child.setCollapsed(true);
    };
    /**
     * as of 2024-03-14, this is only called in the constructor
     * TODO: inline ?
     */
    this._ensureChildIsHydrated = () => {
      if (this.child)
        return;
      const spec = this.config.widget;
      const prevSerial = this.serial.child;
      if (prevSerial && spec.type === prevSerial.type) {
        this.child = this.form.builder._HYDRATE(this, spec, prevSerial);
      } else {
        this.child = this.form.builder._HYDRATE(this, spec, null);
        this.serial.child = this.child.serial;
      }
    };
    this.id = serial?.id ?? nanoid11();
    const defaultActive = config.startActive;
    this.serial = serial ?? {
      id: this.id,
      type: "optional",
      active: defaultActive ?? false,
      collapsed: config.startCollapsed
    };
    const isActive = serial?.active ?? defaultActive;
    if (isActive)
      this.serial.active = true;
    this._ensureChildIsHydrated();
    applyWidgetMixinV2(this);
    makeObservable2(this, { serial: observable7, value: computed3 });
  }
  get childOrThrow() {
    if (this.child == null)
      throw new Error("\u274C optional active but child is null");
    return this.child;
  }
  get value() {
    if (!this.serial.active)
      return null;
    return this.childOrThrow.value;
  }
};
registerWidgetClass("optional", Widget_optional);

// src/controls/widgets/seed/WidgetSeedUI.tsx
import { observer as observer26 } from "mobx-react-lite";
var isDragging3 = false;
var WidgetSeedUI = observer26(function WidgetSeedUI_(p) {
  const widget = p.widget;
  const val = widget.serial.val;
  const isDraggingListener = (ev) => {
    if (ev.button == 0) {
      isDragging3 = false;
      window.removeEventListener("mouseup", isDraggingListener, true);
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        tw: [
          "WIDGET-FIELD",
          "flex-1 flex items-center join",
          "rounded overflow-clip text-shadow",
          "border border-base-200 hover:border-base-200",
          "bg-primary/5",
          "border-b-2 border-b-base-200 hover:border-b-base-300",
          "!outline-none"
        ],
        children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              tw: [
                "flex items-center gap-1 whitespace-nowrap join-item btn-sm btn-ghost text-shadow px-2",
                "bg-base-200 hover:bg-base-200 hover:brightness-110",
                "border-0 !outline-none",
                widget.serial.mode === "randomize" && "btn-active !bg-primary text-shadow-inv text-primary-content"
              ],
              onMouseDown: (ev) => {
                if (ev.button == 0) {
                  widget.setToRandomize();
                  isDragging3 = true;
                  window.addEventListener("mouseup", isDraggingListener, true);
                }
              },
              onMouseEnter: (_ev) => {
                if (isDragging3)
                  widget.setToRandomize();
              },
              children: [
                /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "shuffle" }),
                /* @__PURE__ */ jsx("div", { children: "Random" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              tw: [
                "flex items-center gap-1 flex-shrink whitespace-nowrap join-item btn-sm btn-ghost text-shadow px-2",
                "bg-base-200 hover:bg-base-200 hover:brightness-110",
                "border-0 !outline-none",
                widget.serial.mode === "fixed" && "btn-active !bg-primary text-shadow-inv text-primary-content"
              ],
              onMouseDown: (ev) => {
                if (ev.button == 0) {
                  widget.setToFixed();
                  isDragging3 = true;
                  window.addEventListener("mouseup", isDraggingListener, true);
                }
              },
              onMouseEnter: (ev) => {
                if (isDragging3)
                  widget.setToFixed();
              },
              children: [
                /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "input" }),
                /* @__PURE__ */ jsx("div", { children: "Fixed" })
              ]
            }
          ),
          /* @__PURE__ */ jsx("div", { tw: ["flex-1", widget.serial.mode == "randomize" && "pointer-events-none opacity-25"], children: /* @__PURE__ */ jsx(
            InputNumberUI,
            {
              tw: "!border-none join-item",
              min: widget.config.min,
              max: widget.config.max,
              step: 1,
              value: val,
              mode: "int",
              onValueChange: (value) => widget.setValue(value)
            }
          ) }),
          /* @__PURE__ */ jsx(
            Button,
            {
              tw: "flex w-7 !outline-none",
              size: "sm",
              appearance: "subtle",
              onClick: () => widget.setToFixed(Math.floor(Math.random() * 1e6)),
              icon: /* @__PURE__ */ jsx("span", { tw: "flex-1 pt-0.5", className: "material-symbols-outlined", children: "autorenew" })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        tw: "opacity-0 cursor-default",
        className: "btn btn-xs btn-narrower btn-ghost",
        children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "undo" })
      }
    )
  ] });
});

// src/controls/widgets/seed/WidgetSeed.ts
import { makeAutoObservable as makeAutoObservable13 } from "mobx";
import { nanoid as nanoid12 } from "nanoid";
var Widget_seed = class {
  constructor(form, parent, config, serial) {
    this.form = form;
    this.parent = parent;
    this.config = config;
    this.DefaultHeaderUI = WidgetSeedUI;
    this.DefaultBodyUI = void 0;
    this.type = "seed";
    this.setToFixed = (val) => {
      if (this.serial.mode === "fixed")
        return;
      this.serial.mode = "fixed";
      if (val)
        this.serial.val = val;
      this.bumpValue();
    };
    this.setToRandomize = () => {
      if (this.serial.mode === "randomize")
        return;
      this.serial.mode = "randomize";
      this.bumpValue();
    };
    this.setValue = (val) => {
      this.serial.val = val;
      this.bumpValue();
    };
    this.id = serial?.id ?? nanoid12();
    this.serial = serial ?? {
      type: "seed",
      id: this.id,
      val: config.default ?? 0,
      mode: config.defaultMode ?? "randomize"
    };
    applyWidgetMixinV2(this);
    makeAutoObservable13(this);
  }
  get value() {
    const count = this.form.builder._cache.count;
    return this.serial.mode === "randomize" ? Math.floor(Math.random() * 9999999) : this.serial.val;
  }
};
registerWidgetClass("seed", Widget_seed);

// src/controls/widgets/selectMany/WidgetSelectManyUI.tsx
import { observer as observer27 } from "mobx-react-lite";
var WidgetSelectManyUI = observer27(function WidgetSelectManyUI_(p) {
  const widget = p.widget;
  if (widget.config.appearance === "tab")
    return /* @__PURE__ */ jsx(WidgetSelectMany_TabUI, { widget });
  return /* @__PURE__ */ jsx(WidgetSelectMany_SelectUI, { widget });
});
var WidgetSelectMany_TabUI = observer27(function WidgetSelectMany_TabUI_(p) {
  const widget = p.widget;
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { tw: "rounded select-none flex flex-wrap gap-x-0.5 gap-y-0", children: [
      widget.choices.map((c) => {
        const isSelected = Boolean(widget.serial.values.find((item) => item.id === c.id));
        return /* @__PURE__ */ jsx(
          InputBoolUI,
          {
            active: isSelected,
            display: "button",
            text: c.label,
            onValueChange: (value) => {
              if (value != isSelected)
                widget.toggleItem(c);
            }
          }
        );
      }),
      widget.serial.values.filter((v) => widget.choices.find((i) => i.id === v.id) == null).map((item) => /* @__PURE__ */ jsx(
        InputBoolUI,
        {
          active: true,
          style: { border: "1px solid oklch(var(--er))" },
          display: "button",
          text: item.label ?? "no label",
          onValueChange: (value) => widget.toggleItem(item)
        }
      ))
    ] }),
    widget.errors && /* @__PURE__ */ jsx(MessageErrorUI, { children: /* @__PURE__ */ jsx("ul", { children: widget.errors.map((e, ix) => /* @__PURE__ */ jsx("li", { children: e }, ix)) }) })
  ] });
});
var WidgetSelectMany_SelectUI = observer27(function WidgetSelectMany_SelectUI_(p) {
  const widget = p.widget;
  return /* @__PURE__ */ jsxs("div", { tw: "flex-1", children: [
    /* @__PURE__ */ jsx(
      SelectUI,
      {
        multiple: true,
        tw: [widget.errors && "rsx-field-error"],
        getLabelText: (t) => t.label ?? t.id,
        getLabelUI: (t) => t.label ?? t.id,
        options: () => widget.choices,
        value: () => widget.serial.values,
        equalityCheck: (a, b) => a.id === b.id,
        onChange: (selectOption) => widget.toggleItem(selectOption)
      }
    ),
    widget.errors && /* @__PURE__ */ jsxs("div", { tw: "text-red-500 flex items-center gap-1", children: [
      /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "error" }),
      widget.errors
    ] })
  ] });
});

// src/controls/widgets/selectMany/WidgetSelectMany.tsx
import { makeAutoObservable as makeAutoObservable14 } from "mobx";
import { nanoid as nanoid13 } from "nanoid";
var Widget_selectMany = class {
  constructor(form, parent, config, serial) {
    this.form = form;
    this.parent = parent;
    this.config = config;
    this.DefaultHeaderUI = WidgetSelectManyUI;
    this.DefaultBodyUI = void 0;
    this.type = "selectMany";
    /** un-select given item */
    this.removeItem = (item) => {
      const indexOf = this.serial.values.findIndex((i) => i.id === item.id);
      if (indexOf < 0)
        return console.log(`[\u{1F536}] WidgetSelectMany.removeItem: item not found`);
      this.serial.values = this.serial.values.filter((v) => v.id !== item.id);
      this.bumpValue();
    };
    /** select given item */
    this.addItem = (item) => {
      const i = this.serial.values.indexOf(item);
      if (i >= 0)
        return console.log(`[\u{1F536}] WidgetSelectMany.addItem: item already in list`);
      this.serial.values.push(item);
      this.bumpValue();
    };
    /** select item if item was not selected, un-select if item was selected */
    this.toggleItem = (item) => {
      const i = this.serial.values.findIndex((i2) => i2.id === item.id);
      if (i < 0) {
        this.serial.values.push(item);
        this.bumpValue();
      } else {
        this.serial.values = this.serial.values.filter((v) => v.id !== item.id);
        this.bumpValue();
      }
    };
    this.id = serial?.id ?? nanoid13();
    this.serial = serial ?? {
      type: "selectMany",
      collapsed: config.startCollapsed,
      id: this.id,
      query: "",
      values: config.default ?? []
    };
    if (this.serial.values == null)
      this.serial.values = [];
    applyWidgetMixinV2(this);
    makeAutoObservable14(this);
  }
  get choices() {
    const _choices = this.config.choices;
    return typeof _choices === "function" ? _choices(this.form._ROOT) : _choices;
  }
  get errors() {
    if (this.serial.values == null)
      return null;
    let errors = [];
    for (const value of this.serial.values) {
      if (!this.choices.find((choice) => choice.id === value.id)) {
        errors.push(`value ${value.id} (label: ${value.label}) not in choices`);
      }
    }
    if (errors.length > 0)
      return errors;
    return null;
  }
  get value() {
    return this.serial.values;
  }
};
registerWidgetClass("selectMany", Widget_selectMany);

// src/controls/widgets/selectOne/WidgetSelectOneUI.tsx
import { observer as observer28 } from "mobx-react-lite";
var WidgetSelectOneUI = observer28(function WidgetSelectOneUI_(p) {
  const widget = p.widget;
  if (widget.config.appearance === "tab")
    return /* @__PURE__ */ jsx(WidgetSelectOne_TabUI, { widget });
  return /* @__PURE__ */ jsx(WidgetSelectOne_SelectUI, { widget });
});
var WidgetSelectOne_TabUI = observer28(function WidgetSelectOne_TabUI_(p) {
  const widget = p.widget;
  const selected = widget.serial.val;
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { tw: "rounded select-none ml-auto justify-end flex flex-wrap gap-x-0.5 gap-y-0", children: widget.choices.map((c) => {
      const isSelected = selected?.id === c.id;
      return /* @__PURE__ */ jsx(
        InputBoolUI,
        {
          active: isSelected,
          display: "button",
          text: c.label ?? c.id,
          onValueChange: (value) => {
            if (value === isSelected)
              return;
            widget.value = c;
          }
        },
        c.id
      );
    }) }),
    widget.errors && /* @__PURE__ */ jsxs("div", { tw: "text-red-500 flex items-center gap-1", children: [
      /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "error" }),
      widget.errors
    ] })
  ] });
});
var WidgetSelectOne_SelectUI = observer28(function WidgetSelectOne_SelectUI_(p) {
  const widget = p.widget;
  return /* @__PURE__ */ jsxs("div", { tw: "flex-1", children: [
    /* @__PURE__ */ jsx(
      SelectUI,
      {
        tw: [widget.errors && "rsx-field-error"],
        getLabelText: (t) => t.label ?? makeLabelFromFieldName(t.id),
        options: () => widget.choices,
        equalityCheck: (a, b) => a.id === b.id,
        value: () => widget.serial.val,
        onChange: (selectOption) => {
          if (selectOption == null) {
            return;
          }
          const next = widget.choices.find((c) => c.id === selectOption.id);
          if (next == null) {
            console.log(`\u274C WidgetSelectOneUI: could not find choice for ${JSON.stringify(selectOption)}`);
            return;
          }
          widget.value = next;
        }
      },
      widget.id
    ),
    widget.errors && /* @__PURE__ */ jsxs("div", { tw: "text-red-500 flex items-center gap-1", children: [
      /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "error" }),
      widget.errors
    ] })
  ] });
});

// src/controls/widgets/selectOne/WidgetSelectOne.ts
import { makeAutoObservable as makeAutoObservable15, runInAction as runInAction8 } from "mobx";
import { nanoid as nanoid14 } from "nanoid";
var Widget_selectOne = class {
  constructor(form, parent, config, serial) {
    this.form = form;
    this.parent = parent;
    this.config = config;
    this.DefaultHeaderUI = WidgetSelectOneUI;
    this.DefaultBodyUI = void 0;
    this.type = "selectOne";
    this.id = serial?.id ?? nanoid14();
    const choices = this.choices;
    this.serial = serial ?? {
      type: "selectOne",
      collapsed: config.startCollapsed,
      id: this.id,
      query: "",
      val: config.default ?? choices[0]
    };
    if (this.serial.val == null && Array.isArray(this.config.choices))
      this.serial.val = choices[0];
    applyWidgetMixinV2(this);
    makeAutoObservable15(this);
  }
  get errors() {
    if (this.serial.val == null)
      return "no value selected";
    const selected = this.choices.find((c) => c.id === this.serial.val.id);
    if (selected == null)
      return "selected value not in choices";
    return;
  }
  get choices() {
    const _choices = this.config.choices;
    if (typeof _choices === "function") {
      if (!this.form.ready)
        return [];
      if (this.form._ROOT == null)
        throw new Error("\u274C IMPOSSIBLE: this.form._ROOT is null");
      return _choices(this.form._ROOT, this);
    }
    return _choices;
  }
  set value(next) {
    if (this.serial.val === next)
      return;
    runInAction8(() => {
      this.serial.val = next;
      this.bumpValue();
    });
  }
  get value() {
    return this.serial.val;
  }
};
registerWidgetClass("selectOne", Widget_selectOne);

// src/controls/widgets/shared/WidgetShared.tsx
import { makeAutoObservable as makeAutoObservable16 } from "mobx";
import { nanoid as nanoid15 } from "nanoid";
var Widget_shared = class _Widget_shared {
  constructor(form, parent, config, serial) {
    this.form = form;
    this.parent = parent;
    this.config = config;
    this.type = "shared";
    this.DefaultHeaderUI = void 0;
    this.DefaultBodyUI = void 0;
    // 🔴
    this.hidden = () => new _Widget_shared(this.form, null, { ...this.config, hidden: true }, this.serial);
    this.id = serial?.id ?? nanoid15();
    this.serial = serial ?? { id: this.id, type: "shared", collapsed: config.startCollapsed };
    applyWidgetMixinV2(this);
    makeAutoObservable16(this);
  }
  get shared() {
    return this.config.widget;
  }
  get value() {
    return this.config.widget.value;
  }
};
registerWidgetClass("shared", Widget_shared);

// src/controls/widgets/size/ResolutionState.tsx
import { makeAutoObservable as makeAutoObservable17 } from "mobx";
var ResolutionState = class {
  constructor(req) {
    this.req = req;
    this.idealSizeforModelType = (model) => {
      if (model === "xl")
        return { width: 1024, height: 1024 };
      if (model === "2.0")
        return { width: 768, height: 768 };
      if (model === "2.1")
        return { width: 768, height: 768 };
      if (model === "1.5")
        return { width: 512, height: 512 };
      if (model === "1.4")
        return { width: 512, height: 512 };
      return { width: this.width, height: this.height };
    };
    this.flip = () => {
      const prevWidth = this.width;
      this.req.width = this.height;
      this.req.height = prevWidth;
    };
    // prettier-ignore
    this.desiredModelType = "1.5";
    this.desiredAspectRatio = "1:1";
    this.isAspectRatioLocked = false;
    this.wasHeightAdjustedLast = true;
    this.desiredAspectRatio = (() => {
      const ratio = parseFloatNoRoundingErr(this.realAspectRatio, 2);
      if (ratio === parseFloatNoRoundingErr(1 / 1, 2))
        return "1:1";
      if (ratio === parseFloatNoRoundingErr(16 / 9, 2))
        return "16:9";
      if (ratio === parseFloatNoRoundingErr(4 / 3, 2))
        return "4:3";
      if (ratio === parseFloatNoRoundingErr(3 / 2, 2))
        return "3:2";
      return "1:1";
    })();
    makeAutoObservable17(this);
  }
  get width() {
    return this.req.width;
  }
  // prettier-ignore
  get height() {
    return this.req.height;
  }
  // prettier-ignore
  set width(next) {
    this.req.width = next;
  }
  // prettier-ignore
  set height(next) {
    this.req.height = next;
  }
  setWidth(width) {
    this.width = width;
    this.wasHeightAdjustedLast = false;
    if (this.isAspectRatioLocked) {
      this.updateHeightBasedOnAspectRatio();
    }
  }
  setHeight(height) {
    this.height = height;
    this.wasHeightAdjustedLast = true;
    if (this.isAspectRatioLocked) {
      this.updateWidthBasedOnAspectRatio();
    }
  }
  get realAspectRatio() {
    return this.width / this.height;
  }
  setModelType(modelType) {
    this.desiredModelType = modelType;
    const itgt = this.idealSizeforModelType(modelType);
    const diagPrev = Math.sqrt(this.width ** 2 + this.height ** 2);
    const diagNext = Math.sqrt(itgt.width ** 2 + itgt.height ** 2);
    const factor = diagNext / diagPrev;
    console.log({ modelType, idealTarget: itgt, avg: diagPrev, avg2: diagNext, factor });
    this.width = Math.round(this.width * factor);
    this.height = Math.round(this.height * factor);
    console.log(`final is w=${this.width} x h=${this.height}`);
    console.log(`fixed avg is ${Math.sqrt(this.width ** 2 + this.height ** 2)}`);
  }
  setAspectRatio(aspectRatio) {
    this.desiredAspectRatio = aspectRatio;
    if (this.wasHeightAdjustedLast) {
      this.updateWidthBasedOnAspectRatio();
    } else {
      this.updateHeightBasedOnAspectRatio();
    }
  }
  updateHeightBasedOnAspectRatio() {
    const [widthRatio, heightRatio] = this.desiredAspectRatio.split(":").map(Number);
    this.height = Math.round(this.width * (heightRatio / widthRatio));
  }
  updateWidthBasedOnAspectRatio() {
    const [widthRatio, heightRatio] = this.desiredAspectRatio.split(":").map(Number);
    this.width = Math.round(this.height * (widthRatio / heightRatio));
  }
};

// src/controls/widgets/size/WidgetSizeUI.tsx
import { observer as observer29 } from "mobx-react-lite";
var WigetSize_BlockUI = observer29(function WigetSize_BlockUI_(p) {
  return /* @__PURE__ */ jsx(WigetSizeXUI, { sizeHelper: p.widget.sizeHelper, bounds: p.widget.config });
});
var WigetSize_LineUI = observer29(function WigetSize_LineUI_(p) {
  return /* @__PURE__ */ jsx(WidgetSizeX_LineUI, { sizeHelper: p.widget.sizeHelper, bounds: p.widget.config });
});
var WidgetSizeX_LineUI = observer29(function WidgetSize_LineUI_(p) {
  const uist = p.sizeHelper;
  return /* @__PURE__ */ jsx("div", { className: "flex flex-1 flex-col gap-1", children: /* @__PURE__ */ jsxs(
    "div",
    {
      tw: [
        "WIDGET-FIELD w-full h-full flex items-center join rounded gap-0.5 overflow-clip",
        "border border-base-100 border-b-base-200",
        "border-b-2 hover:border-base-200 hover:border-b-base-300"
      ],
      children: [
        /* @__PURE__ */ jsx(AspectLockButtonUI, { sizeHelper: uist }),
        /* @__PURE__ */ jsx(
          InputNumberUI,
          {
            min: p.bounds?.min ?? 128,
            max: p.bounds?.max ?? 4096,
            step: p.bounds?.step ?? 32,
            mode: "int",
            tw: "join-item !border-none",
            value: uist.width,
            hideSlider: true,
            onValueChange: (next) => uist.setWidth(next),
            forceSnap: true,
            text: "Width",
            suffix: "px"
          }
        ),
        /* @__PURE__ */ jsx(
          InputNumberUI,
          {
            tw: "join-item !border-none",
            min: p.bounds?.min ?? 128,
            max: p.bounds?.max ?? 4096,
            step: p.bounds?.step ?? 32,
            hideSlider: true,
            mode: "int",
            value: uist.height,
            onValueChange: (next) => uist.setHeight(next),
            forceSnap: true,
            text: "Height",
            suffix: "px"
          }
        ),
        /* @__PURE__ */ jsx(AspectRatioSquareUI, { sizeHelper: uist })
      ]
    }
  ) });
});
var AspectLockButtonUI = observer29(function AspectLockButtonUI_(p) {
  const uist = p.sizeHelper;
  return /* @__PURE__ */ jsx(
    "button",
    {
      tw: [
        "btn btn-xs h-8 rounded-none join-item !border-none !outline-none",
        uist.isAspectRatioLocked && "bg-primary hover:bg-primary text-primary-content !border-none"
      ],
      onClick: (ev) => {
        uist.isAspectRatioLocked = !uist.isAspectRatioLocked;
        if (!uist.isAspectRatioLocked) {
          return;
        }
        if (uist.wasHeightAdjustedLast) {
          uist.setHeight(uist.height);
        } else {
          uist.setWidth(uist.width);
        }
      },
      children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: uist.isAspectRatioLocked ? "link" : "link_off" })
    }
  );
});
var AspectRatioSquareUI = observer29(function AspectRatioSquareUI_(p) {
  const uist = p.sizeHelper;
  const ratioDisplaySize = 26;
  return /* @__PURE__ */ jsx(
    "div",
    {
      tw: [
        //
        "flex rounded-sm virtualBorder bg-base-300",
        "overflow-clip",
        "items-center justify-center"
      ],
      style: { width: `${ratioDisplaySize}px`, height: `${ratioDisplaySize}px` },
      children: /* @__PURE__ */ jsx(
        "div",
        {
          tw: "relative bg-primary",
          style: {
            //
            width: "100%",
            height: "100%",
            // Use transform here because it works with floats and will not cause popping/mis-alignments.
            transform: `
        scaleX(${uist.width < uist.height ? Math.round(uist.width / uist.height * ratioDisplaySize) / ratioDisplaySize : "1"})
        scaleY(${uist.height < uist.width ? Math.round(uist.height / uist.width * ratioDisplaySize) / ratioDisplaySize : "1"})`
          }
        }
      )
    }
  );
});
var WigetSizeXUI = observer29(function WigetSizeXUI_(p) {
  const uist = p.sizeHelper;
  const resoBtn = (ar) => /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      tw: ["btn btn-xs join-item", uist.desiredAspectRatio === ar ? "btn-primary" : "btn-ghost"],
      onClick: () => uist.setAspectRatio(ar),
      children: ar
    }
  );
  const modelBtn = (model) => /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      tw: ["btn btn-xs join-item", uist.desiredModelType === model ? "btn-primary" : "btn-ghost"],
      onClick: () => uist.setModelType(model),
      children: model
    }
  );
  return /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-1 mt-0.5 rounded-b", children: /* @__PURE__ */ jsxs("div", { tw: "flex items-start gap-2", children: [
    /* @__PURE__ */ jsxs(Joined, { children: [
      modelBtn("1.5"),
      modelBtn("xl")
    ] }),
    /* @__PURE__ */ jsx("div", { tw: "btn btn-xs", onClick: () => uist.flip(), children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "rotate_right" }) }),
    /* @__PURE__ */ jsxs("div", { tw: "ml-auto flex items-center gap-1", children: [
      /* @__PURE__ */ jsx(Joined, { children: resoBtn("1:1") }),
      /* @__PURE__ */ jsxs(Joined, { children: [
        resoBtn("16:9"),
        resoBtn("9:16")
      ] }),
      /* @__PURE__ */ jsxs(Joined, { children: [
        resoBtn("4:3"),
        resoBtn("3:4")
      ] }),
      /* @__PURE__ */ jsxs(Joined, { children: [
        resoBtn("3:2"),
        resoBtn("2:3")
      ] })
    ] })
  ] }) });
});

// src/controls/widgets/size/WidgetSize.ts
import { makeAutoObservable as makeAutoObservable18, runInAction as runInAction9 } from "mobx";
import { nanoid as nanoid16 } from "nanoid";
var Widget_size = class {
  constructor(form, parent, config, serial) {
    this.form = form;
    this.parent = parent;
    this.config = config;
    this.DefaultHeaderUI = WigetSize_LineUI;
    this.DefaultBodyUI = WigetSize_BlockUI;
    this.type = "size";
    this.id = serial?.id ?? nanoid16();
    if (serial) {
      this.serial = serial;
    } else {
      const aspectRatio = config.default?.aspectRatio ?? "1:1";
      const modelType = config.default?.modelType ?? "SD1.5 512";
      const width = config.default?.width ?? parseInt(modelType.split(" ")[1]);
      const height = config.default?.height ?? parseInt(modelType.split(" ")[1]);
      this.serial = {
        type: "size",
        id: this.id,
        aspectRatio,
        modelType,
        height,
        width
      };
    }
    applyWidgetMixinV2(this);
    makeAutoObservable18(this, { sizeHelper: false });
  }
  get width() {
    return this.serial.width;
  }
  // prettier-ignore
  get height() {
    return this.serial.height;
  }
  // prettier-ignore
  set width(next) {
    if (next === this.serial.width)
      return;
    runInAction9(() => {
      this.serial.width = next;
      this.bumpValue();
    });
  }
  set height(next) {
    if (next === this.serial.height)
      return;
    runInAction9(() => {
      this.serial.height = next;
      this.bumpValue();
    });
  }
  get sizeHelper() {
    const self = this;
    const state = new ResolutionState(this);
    Object.defineProperty(this, "sizeHelper", { value: state });
    return state;
  }
  get value() {
    return this.serial;
  }
};
registerWidgetClass("size", Widget_size);

// src/controls/widgets/spacer/SpacerUI.tsx
import { observer as observer30 } from "mobx-react-lite";
var SpacerUI = observer30(function SpacerUI_(p) {
  return /* @__PURE__ */ jsx("div", { tw: ["ml-auto"] });
});

// src/controls/widgets/spacer/WidgetSpacerUI.tsx
import { observer as observer31 } from "mobx-react-lite";
var WidgetSpacerUI = observer31(function WidgetSpacerUI_(p) {
  return /* @__PURE__ */ jsx(SpacerUI, {});
});

// src/controls/widgets/spacer/WidgetSpacer.tsx
import { makeObservable as makeObservable3, observable as observable8 } from "mobx";
import { nanoid as nanoid17 } from "nanoid";
var Widget_spacer = class {
  constructor(form, parent, config, serial) {
    this.form = form;
    this.parent = parent;
    this.config = config;
    this.DefaultHeaderUI = WidgetSpacerUI;
    this.DefaultBodyUI = void 0;
    this.type = "spacer";
    this.id = serial?.id ?? nanoid17();
    this.serial = serial ?? {
      id: this.id,
      type: "spacer",
      collapsed: false
    };
    applyWidgetMixinV2(this);
    makeObservable3(this, { serial: observable8 });
  }
  get value() {
    return false;
  }
  set value(val) {
  }
};
registerWidgetClass("spacer", Widget_spacer);

// src/controls/widgets/string/WidgetStringUI.tsx
import { observer as observer32 } from "mobx-react-lite";
var startValue2 = "";
var cancelled2 = false;
var WidgetString_TextareaHeaderUI = observer32(function WidgetString_TextareaHeaderUI_(p) {
  const widget = p.widget;
  if (!widget.config.textarea)
    return null;
  if (!p.widget.serial.collapsed)
    return null;
  return /* @__PURE__ */ jsx("div", { tw: "line-clamp-1 italic opacity-50", children: p.widget.value });
});
var WidgetString_TextareaBodyUI = observer32(function WidgetString_TextareaBodyUI_(p) {
  const widget = p.widget;
  if (!widget.config.textarea)
    return null;
  const val = widget.value;
  return /* @__PURE__ */ jsx(
    "textarea",
    {
      style: { lineHeight: "1.3rem" },
      tw: "textarea textarea-bordered textarea-sm w-full ",
      placeholder: widget.config.placeHolder,
      rows: 3,
      value: val,
      onChange: (ev) => {
        widget.value = ev.target.value;
      }
    }
  );
});
var WidgetString_HeaderUI = observer32(function WidgetStringUI_(p) {
  const widget = p.widget;
  const val = widget.value;
  const { inputValue, setInputValue, isEditing, setEditing } = widget;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        tw: [
          "WIDGET-FIELD",
          "h-full w-full",
          "flex flex-1 items-center relative",
          "rounded overflow-clip text-shadow",
          "border border-base-100 hover:border-base-200",
          "hover:brightness-110",
          "bg-primary/5",
          "border-b-2 border-b-base-200 hover:border-b-base-300"
        ],
        onMouseDown: (ev) => {
          if (ev.button == 1) {
            let textInput = ev.currentTarget.querySelector('input[type="text"');
            textInput.focus();
          }
        },
        children: /* @__PURE__ */ jsx(
          "input",
          {
            tw: "input input-sm w-full h-full !outline-none text-shadow",
            type: widget.config.inputType,
            placeholder: widget.config.placeHolder,
            value: isEditing ? inputValue : val,
            onChange: (ev) => {
              setInputValue(ev.target.value);
            },
            onDragStart: (ev) => {
              ev.preventDefault();
            },
            onFocus: (ev) => {
              setEditing(true);
              let textInput = ev.currentTarget;
              textInput.select();
              startValue2 = val;
              setInputValue(val.toString());
            },
            onBlur: (ev) => {
              setEditing(false);
              const next = ev.currentTarget.value;
              if (cancelled2) {
                cancelled2 = false;
                p.widget.value = startValue2;
                return;
              }
              p.widget.value = inputValue;
            },
            onKeyDown: (ev) => {
              if (ev.key === "Enter") {
                ev.currentTarget.blur();
              } else if (ev.key === "Escape") {
                cancelled2 = true;
                ev.currentTarget.blur();
              }
            }
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        tw: [widget.isChanged ? void 0 : "btn-disabled opacity-50"],
        onClick: () => widget.reset(),
        className: "btn btn-xs btn-narrower btn-ghost",
        children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "undo" })
      }
    )
  ] });
});

// src/controls/widgets/string/WidgetString.tsx
import { makeAutoObservable as makeAutoObservable19, runInAction as runInAction10 } from "mobx";
import { nanoid as nanoid18 } from "nanoid";
var Widget_string = class {
  // prettier-ignore
  constructor(form, parent, config, serial) {
    this.form = form;
    this.parent = parent;
    this.config = config;
    this.border = false;
    this.type = "str";
    // --------------
    this.inputValue = "";
    this.setInputValue = (next) => this.inputValue = next;
    this.isEditing = false;
    this.setEditing = (next) => this.isEditing = next;
    this.defaultValue = this.config.default ?? "";
    // prettier-ignore
    this.reset = () => {
      this.value = this.defaultValue;
    };
    this.id = serial?.id ?? nanoid18();
    this.serial = serial ?? {
      type: "str",
      val: this.config.default,
      collapsed: config.startCollapsed,
      id: this.id
    };
    applyWidgetMixinV2(this);
    makeAutoObservable19(this);
  }
  get DefaultHeaderUI() {
    if (this.config.textarea)
      return WidgetString_TextareaHeaderUI;
    else
      return WidgetString_HeaderUI;
  }
  get DefaultBodyUI() {
    if (this.config.textarea)
      return WidgetString_TextareaBodyUI;
    return void 0;
  }
  get isChanged() {
    return this.serial.val !== this.defaultValue;
  }
  set value(next) {
    if (this.serial.val === next)
      return;
    runInAction10(() => {
      this.serial.val = next;
      this.bumpValue();
    });
  }
  get value() {
    return this.serial.val ?? this.config.default ?? "";
  }
};
registerWidgetClass("str", Widget_string);

// src/controls/FormBuilder.loco.ts
import { makeAutoObservable as makeAutoObservable20 } from "mobx";
var FormBuilder_Loco = class {
  /** (@internal) don't call this yourself */
  constructor(form) {
    this.form = form;
    this.time = (config = {}) => new Spec("str", { inputType: "time", ...config });
    this.date = (config = {}) => new Spec("str", { inputType: "date", ...config });
    this.datetime = (config = {}) => new Spec("str", { inputType: "datetime-local", ...config });
    this.password = (config = {}) => new Spec("str", { inputType: "password", ...config });
    this.email = (config = {}) => new Spec("str", { inputType: "email", ...config });
    this.url = (config = {}) => new Spec("str", { inputType: "url", ...config });
    this.string = (config = {}) => new Spec("str", config);
    this.text = (config = {}) => new Spec("str", config);
    this.textarea = (config = {}) => new Spec("str", { textarea: true, ...config });
    this.boolean = (config = {}) => new Spec("bool", config);
    this.bool = (config = {}) => new Spec("bool", config);
    this.size = (config = {}) => new Spec("size", config);
    this.spacer = (config = {}) => new Spec("spacer", { alignLabel: false, label: false, collapsed: false, border: false });
    this.seed = (config = {}) => new Spec("seed", config);
    this.color = (config = {}) => new Spec("color", config);
    this.colorV2 = (config = {}) => new Spec("str", { inputType: "color", ...config });
    this.matrix = (config) => new Spec("matrix", config);
    this.button = (config) => new Spec("button", config);
    /** variants: `header` */
    this.markdown = (config) => new Spec("markdown", typeof config === "string" ? { markdown: config } : config);
    /** [markdown variant]: inline=true, label=false */
    this.header = (config) => new Spec("markdown", typeof config === "string" ? { markdown: config, inHeader: true, label: false } : { inHeader: true, label: false, alignLabel: false, ...config });
    // image       = (config: Widget_image_config = {})                                                         => new Spec<Widget_image                       >('image'     , config)
    this.int = (config = {}) => new Spec("number", { mode: "int", ...config });
    /** [number variant] precent = mode=int, default=100, step=10, min=1, max=100, suffix='%', */
    this.percent = (config = {}) => new Spec("number", { mode: "int", default: 100, step: 10, min: 1, max: 100, suffix: "%", ...config });
    this.float = (config = {}) => new Spec("number", { mode: "float", ...config });
    this.number = (config = {}) => new Spec("number", { mode: "float", ...config });
    this.list = (config) => new Spec("list", config);
    this.selectOneV2 = (p) => new Spec("selectOne", { choices: p.map((id) => ({ id, label: id })), appearance: "tab" });
    // prettier-ignore
    this.selectOne = (config) => new Spec("selectOne", config);
    this.selectMany = (config) => new Spec("selectMany", config);
    /** see also: `fields` for a more practical api */
    this.group = (config = {}) => new Spec("group", config);
    this.fields = (fields, config = {}) => new Spec("group", { items: fields, ...config });
    this.choice = (config) => new Spec("choices", { multi: false, ...config });
    this.choices = (config) => new Spec("choices", { multi: true, ...config });
    this.ok = (config = {}) => new Spec("group", config);
    /** simple choice alternative api */
    this.tabs = (items, config = {}) => new Spec("choices", { items, multi: false, ...config, appearance: "tab" });
    // optional wrappers
    this.optional = (p) => new Spec("optional", p);
    this.llmModel = (p = {}) => {
      const choices = Object.entries(openRouterInfos).map(([id, info]) => ({ id, label: info.name }));
      const def = choices ? choices.find((c) => c.id === p.default) : void 0;
      return this.selectOne(
        { default: def, choices }
      );
    };
    /**
     * Calling this function will mount and instanciate the subform right away
     * Subform will be register in the root form `group`, using `__${key}__` as the key
     * This is a core abstraction that enables features like
     *  - mountting a widget at several places in the form
     *  - recursive forms
     *  - dynamic widgets depending on other widgets values
     * */
    this.shared = (key, unmounted) => {
      const name = `__${key}__`;
      const prevSerial = this.form._ROOT.serial.values_[name];
      let widget;
      if (prevSerial && prevSerial.type === unmounted.type) {
        widget = this._HYDRATE(null, unmounted, prevSerial);
      } else {
        widget = this._HYDRATE(null, unmounted, null);
        this.form._ROOT.serial.values_[name] = widget.serial;
      }
      return new Widget_shared(this.form, null, { rootKey: key, widget });
    };
    this._FIX_INDENTATION = _FIX_INDENTATION;
    /** (@internal); */
    this._cache = { count: 0 };
    /** (@internal) advanced way to restore form state. used internally */
    this._HYDRATE = (parent, unmounted, serial) => {
      if (serial != null && serial.type !== unmounted.type) {
        console.log(`[\u{1F536}] INVALID SERIAL (expected: ${unmounted.type}, got: ${serial.type})`);
        serial = null;
      }
      if (unmounted instanceof Widget_shared) {
        return unmounted;
      }
      if (!(unmounted instanceof Spec)) {
        console.log(`[\u274C] _HYDRATE received an invalid unmounted widget. This is probably a bug.`);
      }
      const type = unmounted.type;
      const config = unmounted.config;
      if (type === "group")
        return new Widget_group(this.form, parent, config, serial, this.form._ROOT ? void 0 : (x) => {
          this.form._ROOT = x;
        });
      if (type === "shared") {
        throw new Error(`[\u274C] For now, Shared_Widget have been design to bypass spec hydratation completely.`);
      }
      if (type === "optional")
        return new Widget_optional(this.form, parent, config, serial);
      if (type === "bool")
        return new Widget_bool(this.form, parent, config, serial);
      if (type === "str")
        return new Widget_string(this.form, parent, config, serial);
      if (type === "choices")
        return new Widget_choices(this.form, parent, config, serial);
      if (type === "number")
        return new Widget_number(this.form, parent, config, serial);
      if (type === "color")
        return new Widget_color(this.form, parent, config, serial);
      if (type === "list")
        return new Widget_list(this.form, parent, config, serial);
      if (type === "button")
        return new Widget_button(this.form, parent, config, serial);
      if (type === "seed")
        return new Widget_seed(this.form, parent, config, serial);
      if (type === "matrix")
        return new Widget_matrix(this.form, parent, config, serial);
      if (type === "selectOne")
        return new Widget_selectOne(this.form, parent, config, serial);
      if (type === "selectMany")
        return new Widget_selectMany(this.form, parent, config, serial);
      if (type === "size")
        return new Widget_size(this.form, parent, config, serial);
      if (type === "spacer")
        return new Widget_spacer(this.form, parent, config, serial);
      if (type === "markdown")
        return new Widget_markdown(this.form, parent, config, serial);
      console.log(`\u{1F534} unknown widget "${type}" in serial.`);
      return new Widget_markdown(this.form, parent, { markdown: `unknown widget "${type}" in serial.` });
    };
    makeAutoObservable20(this, {});
  }
  // --------------------
  wrapOptional(config, widgetFn) {
    return this.optional({
      label: config.label,
      requirements: config.requirements,
      startActive: config.startActive,
      startCollapsed: config.startCollapsed,
      widget: widgetFn({ ...config, startCollapsed: void 0 })
    });
  }
};
var LocoFormManager = new FormManager(FormBuilder_Loco);
export {
  ASSERT_ARRAY,
  ASSERT_EQUAL,
  ASSERT_STRING,
  Addon,
  AnimatedSizeUI,
  AspectLockButtonUI,
  AspectRatioSquareUI,
  Button,
  DropdownMenu,
  ErrorBoundaryFallback,
  Form,
  FormBuilder_Loco,
  FormControl,
  FormControlLabel,
  FormHelpText,
  FormManager,
  FormUI,
  GlobalFormCtx,
  Input,
  InputBoolUI,
  InputNumberBase,
  InputNumberUI,
  Joined,
  JsonViewUI,
  ListControlsUI,
  ListItemCollapseBtnUI,
  Loader,
  LocoFormManager,
  MarkdownUI,
  Menu,
  MenuBar,
  Message,
  MessageErrorUI,
  MessageInfoUI,
  MessageWarningUI,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalShellUI,
  ModalTitle,
  MultiCascader,
  NavItem,
  Panel,
  Popover,
  ProgressLine,
  Radio,
  RadioTile,
  Rate,
  ResolutionState,
  RevealState,
  RevealUI,
  SelectPicker,
  SelectPopupUI,
  SelectUI,
  Slider,
  SpacerUI,
  Speaker,
  Spec,
  Tag,
  TagPicker,
  Toggle,
  Tooltip,
  Tree,
  Whisper,
  WidgetBoolUI,
  WidgetChoices_BodyUI,
  WidgetChoices_HeaderUI,
  WidgetChoices_SelectHeaderUI,
  WidgetColorUI,
  WidgetGroup_BlockUI,
  WidgetGroup_LineUI,
  WidgetInlineRunUI,
  WidgetList_BodyUI,
  WidgetList_LineUI,
  WidgetMardownUI,
  WidgetMatrixUI,
  WidgetNumberUI,
  WidgetSeedUI,
  WidgetSelectManyUI,
  WidgetSelectMany_SelectUI,
  WidgetSelectMany_TabUI,
  WidgetSelectOneUI,
  WidgetSelectOne_SelectUI,
  WidgetSelectOne_TabUI,
  WidgetSizeX_LineUI,
  WidgetSpacerUI,
  WidgetString_HeaderUI,
  WidgetString_TextareaBodyUI,
  WidgetString_TextareaHeaderUI,
  WidgetTooltipUI,
  WidgetWithLabelUI,
  Widget_ToggleUI,
  Widget_bool,
  Widget_button,
  Widget_choices,
  Widget_color,
  Widget_group,
  Widget_list,
  Widget_markdown,
  Widget_matrix,
  Widget_number,
  Widget_optional,
  Widget_seed,
  Widget_selectMany,
  Widget_selectOne,
  Widget_shared,
  Widget_size,
  Widget_spacer,
  Widget_string,
  WigetSizeXUI,
  WigetSize_BlockUI,
  WigetSize_LineUI,
  _FIX_INDENTATION,
  applyWidgetMixinV2,
  asSTRING_orCrash,
  bang,
  computePlacement,
  debounce,
  defaultHideDelay,
  defaultShowDelay,
  exhaust,
  getActualWidgetToDisplay,
  getBorderStatusForWidget,
  getCurrentForm_IMPL,
  getIfWidgetIsCollapsible,
  getIfWidgetNeedAlignedLabel,
  getWidgetClass,
  isWidgetGroup,
  isWidgetOptional,
  isWidgetShared,
  makeLabelFromFieldName,
  normalizeText,
  openRouterInfos,
  parseFloatNoRoundingErr,
  registerWidgetClass,
  runWithGlobalForm,
  searchMatches,
  toastError,
  toastInfo,
  toastSuccess,
  unaccent,
  useMemoLazy,
  useSizeOf
};
