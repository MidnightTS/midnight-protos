"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GivingRecordNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GivingRecord_1 = require("./GivingRecord");
// @generated message type with reflection information, may provide speed optimized methods
class GivingRecordNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("GivingRecordNotify", [
            { no: 13, name: "giving_record_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GivingRecord_1.GivingRecord }
        ]);
    }
    create(value) {
        const message = { givingRecordList: [] };
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
                case /* repeated GivingRecord giving_record_list */ 13:
                    message.givingRecordList.push(GivingRecord_1.GivingRecord.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated GivingRecord giving_record_list = 13; */
        for (let i = 0; i < message.givingRecordList.length; i++)
            GivingRecord_1.GivingRecord.internalBinaryWrite(message.givingRecordList[i], writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GivingRecordNotify
 */
exports.GivingRecordNotify = new GivingRecordNotify$Type();
