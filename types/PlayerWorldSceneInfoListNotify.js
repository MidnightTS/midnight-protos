"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerWorldSceneInfoListNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const PlayerWorldSceneInfo_1 = require("./PlayerWorldSceneInfo");
// @generated message type with reflection information, may provide speed optimized methods
class PlayerWorldSceneInfoListNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("PlayerWorldSceneInfoListNotify", [
            { no: 2, name: "info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => PlayerWorldSceneInfo_1.PlayerWorldSceneInfo }
        ]);
    }
    create(value) {
        const message = { infoList: [] };
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
                case /* repeated PlayerWorldSceneInfo info_list */ 2:
                    message.infoList.push(PlayerWorldSceneInfo_1.PlayerWorldSceneInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated PlayerWorldSceneInfo info_list = 2; */
        for (let i = 0; i < message.infoList.length; i++)
            PlayerWorldSceneInfo_1.PlayerWorldSceneInfo.internalBinaryWrite(message.infoList[i], writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerWorldSceneInfoListNotify
 */
exports.PlayerWorldSceneInfoListNotify = new PlayerWorldSceneInfoListNotify$Type();
