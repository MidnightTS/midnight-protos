"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerApplyEnterMpNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const OnlinePlayerInfo_1 = require("./OnlinePlayerInfo");
// @generated message type with reflection information, may provide speed optimized methods
class PlayerApplyEnterMpNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("PlayerApplyEnterMpNotify", [
            { no: 12, name: "src_player_info", kind: "message", T: () => OnlinePlayerInfo_1.OnlinePlayerInfo },
            { no: 9, name: "src_thread_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "src_app_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { srcThreadIndex: 0, srcAppId: 0 };
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
                case /* OnlinePlayerInfo src_player_info */ 12:
                    message.srcPlayerInfo = OnlinePlayerInfo_1.OnlinePlayerInfo.internalBinaryRead(reader, reader.uint32(), options, message.srcPlayerInfo);
                    break;
                case /* uint32 src_thread_index */ 9:
                    message.srcThreadIndex = reader.uint32();
                    break;
                case /* uint32 src_app_id */ 13:
                    message.srcAppId = reader.uint32();
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
        /* OnlinePlayerInfo src_player_info = 12; */
        if (message.srcPlayerInfo)
            OnlinePlayerInfo_1.OnlinePlayerInfo.internalBinaryWrite(message.srcPlayerInfo, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 src_thread_index = 9; */
        if (message.srcThreadIndex !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.srcThreadIndex);
        /* uint32 src_app_id = 13; */
        if (message.srcAppId !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.srcAppId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerApplyEnterMpNotify
 */
exports.PlayerApplyEnterMpNotify = new PlayerApplyEnterMpNotify$Type();
