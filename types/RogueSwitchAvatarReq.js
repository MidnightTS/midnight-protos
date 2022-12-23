"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RogueSwitchAvatarReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class RogueSwitchAvatarReq$Type extends runtime_5.MessageType {
    constructor() {
        super("RogueSwitchAvatarReq", [
            { no: 8, name: "onstage_avatar_guid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 10, name: "dungeon_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "cell_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "cur_avatar_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { onstageAvatarGuidList: [], dungeonId: 0, cellId: 0, curAvatarGuid: 0n };
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
                case /* repeated uint64 onstage_avatar_guid_list */ 8:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.onstageAvatarGuidList.push(reader.uint64().toBigInt());
                    else
                        message.onstageAvatarGuidList.push(reader.uint64().toBigInt());
                    break;
                case /* uint32 dungeon_id */ 10:
                    message.dungeonId = reader.uint32();
                    break;
                case /* uint32 cell_id */ 11:
                    message.cellId = reader.uint32();
                    break;
                case /* uint64 cur_avatar_guid */ 4:
                    message.curAvatarGuid = reader.uint64().toBigInt();
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
        /* repeated uint64 onstage_avatar_guid_list = 8; */
        if (message.onstageAvatarGuidList.length) {
            writer.tag(8, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.onstageAvatarGuidList.length; i++)
                writer.uint64(message.onstageAvatarGuidList[i]);
            writer.join();
        }
        /* uint32 dungeon_id = 10; */
        if (message.dungeonId !== 0)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.dungeonId);
        /* uint32 cell_id = 11; */
        if (message.cellId !== 0)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.cellId);
        /* uint64 cur_avatar_guid = 4; */
        if (message.curAvatarGuid !== 0n)
            writer.tag(4, runtime_2.WireType.Varint).uint64(message.curAvatarGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message RogueSwitchAvatarReq
 */
exports.RogueSwitchAvatarReq = new RogueSwitchAvatarReq$Type();
