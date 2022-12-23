"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerAnnounceNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const AnnounceData_1 = require("./AnnounceData");
// @generated message type with reflection information, may provide speed optimized methods
class ServerAnnounceNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("ServerAnnounceNotify", [
            { no: 14, name: "announce_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => AnnounceData_1.AnnounceData }
        ]);
    }
    create(value) {
        const message = { announceDataList: [] };
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
                case /* repeated AnnounceData announce_data_list */ 14:
                    message.announceDataList.push(AnnounceData_1.AnnounceData.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated AnnounceData announce_data_list = 14; */
        for (let i = 0; i < message.announceDataList.length; i++)
            AnnounceData_1.AnnounceData.internalBinaryWrite(message.announceDataList[i], writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ServerAnnounceNotify
 */
exports.ServerAnnounceNotify = new ServerAnnounceNotify$Type();
