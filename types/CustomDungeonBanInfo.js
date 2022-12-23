"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomDungeonBanInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const CustomDungeonBanType_1 = require("./CustomDungeonBanType");
// @generated message type with reflection information, may provide speed optimized methods
class CustomDungeonBanInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("CustomDungeonBanInfo", [
            { no: 15, name: "expire_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "ban_type", kind: "enum", T: () => ["CustomDungeonBanType", CustomDungeonBanType_1.CustomDungeonBanType, "CUSTOM_DUNGEON_BAN_TYPE_"] },
            { no: 13, name: "dungeon_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { expireTime: 0, banType: 0, dungeonGuid: 0n };
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
                case /* uint32 expire_time */ 15:
                    message.expireTime = reader.uint32();
                    break;
                case /* CustomDungeonBanType ban_type */ 2:
                    message.banType = reader.int32();
                    break;
                case /* uint64 dungeon_guid */ 13:
                    message.dungeonGuid = reader.uint64().toBigInt();
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
    internalBinaryWrite(message, writer, options) {
        /* uint32 expire_time = 15; */
        if (message.expireTime !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.expireTime);
        /* CustomDungeonBanType ban_type = 2; */
        if (message.banType !== 0)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.banType);
        /* uint64 dungeon_guid = 13; */
        if (message.dungeonGuid !== 0n)
            writer.tag(13, runtime_1.WireType.Varint).uint64(message.dungeonGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CustomDungeonBanInfo
 */
exports.CustomDungeonBanInfo = new CustomDungeonBanInfo$Type();
