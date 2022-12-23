"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerApplyEnterHomeNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const OnlinePlayerInfo_1 = require("./OnlinePlayerInfo");
// @generated message type with reflection information, may provide speed optimized methods
class PlayerApplyEnterHomeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("PlayerApplyEnterHomeNotify", [
            { no: 8, name: "src_app_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "src_player_info", kind: "message", T: () => OnlinePlayerInfo_1.OnlinePlayerInfo }
        ]);
    }
    create(value) {
        const message = { srcAppId: 0 };
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
                case /* uint32 src_app_id */ 8:
                    message.srcAppId = reader.uint32();
                    break;
                case /* OnlinePlayerInfo src_player_info */ 10:
                    message.srcPlayerInfo = OnlinePlayerInfo_1.OnlinePlayerInfo.internalBinaryRead(reader, reader.uint32(), options, message.srcPlayerInfo);
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
        /* uint32 src_app_id = 8; */
        if (message.srcAppId !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.srcAppId);
        /* OnlinePlayerInfo src_player_info = 10; */
        if (message.srcPlayerInfo)
            OnlinePlayerInfo_1.OnlinePlayerInfo.internalBinaryWrite(message.srcPlayerInfo, writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerApplyEnterHomeNotify
 */
exports.PlayerApplyEnterHomeNotify = new PlayerApplyEnterHomeNotify$Type();
