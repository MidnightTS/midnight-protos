"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProudSkillChangeNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ProudSkillChangeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("ProudSkillChangeNotify", [
            { no: 13, name: "avatar_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 5, name: "proud_skill_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "skill_depot_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { avatarGuid: 0n, proudSkillList: [], skillDepotId: 0, entityId: 0 };
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
                case /* uint64 avatar_guid */ 13:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                case /* repeated uint32 proud_skill_list */ 5:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.proudSkillList.push(reader.uint32());
                    else
                        message.proudSkillList.push(reader.uint32());
                    break;
                case /* uint32 skill_depot_id */ 12:
                    message.skillDepotId = reader.uint32();
                    break;
                case /* uint32 entity_id */ 3:
                    message.entityId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint64 avatar_guid = 13; */
        if (message.avatarGuid !== 0n)
            writer.tag(13, runtime_2.WireType.Varint).uint64(message.avatarGuid);
        /* repeated uint32 proud_skill_list = 5; */
        if (message.proudSkillList.length) {
            writer.tag(5, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.proudSkillList.length; i++)
                writer.uint32(message.proudSkillList[i]);
            writer.join();
        }
        /* uint32 skill_depot_id = 12; */
        if (message.skillDepotId !== 0)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.skillDepotId);
        /* uint32 entity_id = 3; */
        if (message.entityId !== 0)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.entityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ProudSkillChangeNotify
 */
exports.ProudSkillChangeNotify = new ProudSkillChangeNotify$Type();