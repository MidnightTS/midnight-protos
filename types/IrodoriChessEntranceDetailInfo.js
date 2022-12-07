"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IrodoriChessEntranceDetailInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const IrodoriChessEntranceInfo_1 = require("./IrodoriChessEntranceInfo");
// @generated message type with reflection information, may provide speed optimized methods
class IrodoriChessEntranceDetailInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("IrodoriChessEntranceDetailInfo", [
            { no: 14, name: "info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => IrodoriChessEntranceInfo_1.IrodoriChessEntranceInfo }
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
                case /* repeated IrodoriChessEntranceInfo info_list */ 14:
                    message.infoList.push(IrodoriChessEntranceInfo_1.IrodoriChessEntranceInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated IrodoriChessEntranceInfo info_list = 14; */
        for (let i = 0; i < message.infoList.length; i++)
            IrodoriChessEntranceInfo_1.IrodoriChessEntranceInfo.internalBinaryWrite(message.infoList[i], writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message IrodoriChessEntranceDetailInfo
 */
exports.IrodoriChessEntranceDetailInfo = new IrodoriChessEntranceDetailInfo$Type();
