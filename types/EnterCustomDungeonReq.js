"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnterCustomDungeonReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const EnterCustomDungeonType_1 = require("./EnterCustomDungeonType");
// @generated message type with reflection information, may provide speed optimized methods
class EnterCustomDungeonReq$Type extends runtime_5.MessageType {
    constructor() {
        super("EnterCustomDungeonReq", [
            { no: 7, name: "dungeon_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "enter_type", kind: "enum", T: () => ["EnterCustomDungeonType", EnterCustomDungeonType_1.EnterCustomDungeonType, "ENTER_CUSTOM_DUNGEON_TYPE_"] },
            { no: 4, name: "dungeon_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { dungeonId: 0, enterType: 0, dungeonGuid: 0n };
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
                case /* uint32 dungeon_id */ 7:
                    message.dungeonId = reader.uint32();
                    break;
                case /* EnterCustomDungeonType enter_type */ 8:
                    message.enterType = reader.int32();
                    break;
                case /* uint64 dungeon_guid */ 4:
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
        /* uint32 dungeon_id = 7; */
        if (message.dungeonId !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.dungeonId);
        /* EnterCustomDungeonType enter_type = 8; */
        if (message.enterType !== 0)
            writer.tag(8, runtime_1.WireType.Varint).int32(message.enterType);
        /* uint64 dungeon_guid = 4; */
        if (message.dungeonGuid !== 0n)
            writer.tag(4, runtime_1.WireType.Varint).uint64(message.dungeonGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EnterCustomDungeonReq
 */
exports.EnterCustomDungeonReq = new EnterCustomDungeonReq$Type();
