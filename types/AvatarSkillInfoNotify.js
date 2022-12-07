"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarSkillInfoNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const AvatarSkillInfo_1 = require("./AvatarSkillInfo");
// @generated message type with reflection information, may provide speed optimized methods
class AvatarSkillInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("AvatarSkillInfoNotify", [
            { no: 6, name: "skill_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => AvatarSkillInfo_1.AvatarSkillInfo } },
            { no: 4, name: "guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { skillMap: {}, guid: 0n };
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
                case /* map<uint32, AvatarSkillInfo> skill_map */ 6:
                    this.binaryReadMap6(message.skillMap, reader, options);
                    break;
                case /* uint64 guid */ 4:
                    message.guid = reader.uint64().toBigInt();
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
    binaryReadMap6(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = AvatarSkillInfo_1.AvatarSkillInfo.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field AvatarSkillInfoNotify.skill_map");
            }
        }
        map[key ?? 0] = val ?? AvatarSkillInfo_1.AvatarSkillInfo.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, AvatarSkillInfo> skill_map = 6; */
        for (let k of Object.keys(message.skillMap)) {
            writer.tag(6, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            AvatarSkillInfo_1.AvatarSkillInfo.internalBinaryWrite(message.skillMap[k], writer, options);
            writer.join().join();
        }
        /* uint64 guid = 4; */
        if (message.guid !== 0n)
            writer.tag(4, runtime_1.WireType.Varint).uint64(message.guid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AvatarSkillInfoNotify
 */
exports.AvatarSkillInfoNotify = new AvatarSkillInfoNotify$Type();
