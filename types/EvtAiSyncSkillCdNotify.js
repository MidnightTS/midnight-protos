"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvtAiSyncSkillCdNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const AiSkillCdInfo_1 = require("./AiSkillCdInfo");
// @generated message type with reflection information, may provide speed optimized methods
class EvtAiSyncSkillCdNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("EvtAiSyncSkillCdNotify", [
            { no: 14, name: "ai_cd_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => AiSkillCdInfo_1.AiSkillCdInfo } }
        ]);
    }
    create(value) {
        const message = { aiCdMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint32, AiSkillCdInfo> ai_cd_map */ 14:
                    this.binaryReadMap14(message.aiCdMap, reader, options);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    binaryReadMap14(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = AiSkillCdInfo_1.AiSkillCdInfo.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field EvtAiSyncSkillCdNotify.ai_cd_map");
            }
        }
        map[key ?? 0] = val ?? AiSkillCdInfo_1.AiSkillCdInfo.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, AiSkillCdInfo> ai_cd_map = 14; */
        for (let k of Object.keys(message.aiCdMap)) {
            writer.tag(14, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            AiSkillCdInfo_1.AiSkillCdInfo.internalBinaryWrite(message.aiCdMap[k], writer, options);
            writer.join().join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EvtAiSyncSkillCdNotify
 */
exports.EvtAiSyncSkillCdNotify = new EvtAiSyncSkillCdNotify$Type();
