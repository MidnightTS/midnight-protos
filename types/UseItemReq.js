"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseItemReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class UseItemReq$Type extends runtime_5.MessageType {
    constructor() {
        super("UseItemReq", [
            { no: 14, name: "count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "target_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 8, name: "option_idx", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "is_enter_mp_dungeon_team", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { count: 0, guid: 0n, targetGuid: 0n, optionIdx: 0, isEnterMpDungeonTeam: false };
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
                case /* uint32 count */ 14:
                    message.count = reader.uint32();
                    break;
                case /* uint64 guid */ 1:
                    message.guid = reader.uint64().toBigInt();
                    break;
                case /* uint64 target_guid */ 2:
                    message.targetGuid = reader.uint64().toBigInt();
                    break;
                case /* uint32 option_idx */ 8:
                    message.optionIdx = reader.uint32();
                    break;
                case /* bool is_enter_mp_dungeon_team */ 9:
                    message.isEnterMpDungeonTeam = reader.bool();
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
        /* uint32 count = 14; */
        if (message.count !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.count);
        /* uint64 guid = 1; */
        if (message.guid !== 0n)
            writer.tag(1, runtime_1.WireType.Varint).uint64(message.guid);
        /* uint64 target_guid = 2; */
        if (message.targetGuid !== 0n)
            writer.tag(2, runtime_1.WireType.Varint).uint64(message.targetGuid);
        /* uint32 option_idx = 8; */
        if (message.optionIdx !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.optionIdx);
        /* bool is_enter_mp_dungeon_team = 9; */
        if (message.isEnterMpDungeonTeam !== false)
            writer.tag(9, runtime_1.WireType.Varint).bool(message.isEnterMpDungeonTeam);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message UseItemReq
 */
exports.UseItemReq = new UseItemReq$Type();
