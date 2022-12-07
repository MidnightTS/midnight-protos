"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerEnterDungeonReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const DungeonEnterPosInfo_1 = require("./DungeonEnterPosInfo");
// @generated message type with reflection information, may provide speed optimized methods
class PlayerEnterDungeonReq$Type extends runtime_5.MessageType {
    constructor() {
        super("PlayerEnterDungeonReq", [
            { no: 4, name: "dungeon_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "enter_pos_info", kind: "message", T: () => DungeonEnterPosInfo_1.DungeonEnterPosInfo },
            { no: 1, name: "point_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { dungeonId: 0, pointId: 0 };
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
                case /* uint32 dungeon_id */ 4:
                    message.dungeonId = reader.uint32();
                    break;
                case /* DungeonEnterPosInfo enter_pos_info */ 9:
                    message.enterPosInfo = DungeonEnterPosInfo_1.DungeonEnterPosInfo.internalBinaryRead(reader, reader.uint32(), options, message.enterPosInfo);
                    break;
                case /* uint32 point_id */ 1:
                    message.pointId = reader.uint32();
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
        /* uint32 dungeon_id = 4; */
        if (message.dungeonId !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.dungeonId);
        /* DungeonEnterPosInfo enter_pos_info = 9; */
        if (message.enterPosInfo)
            DungeonEnterPosInfo_1.DungeonEnterPosInfo.internalBinaryWrite(message.enterPosInfo, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 point_id = 1; */
        if (message.pointId !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.pointId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerEnterDungeonReq
 */
exports.PlayerEnterDungeonReq = new PlayerEnterDungeonReq$Type();
