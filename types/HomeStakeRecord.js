"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeStakeRecord = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const HomeStakePlayRecord_1 = require("./HomeStakePlayRecord");
// @generated message type with reflection information, may provide speed optimized methods
class HomeStakeRecord$Type extends runtime_5.MessageType {
    constructor() {
        super("HomeStakeRecord", [
            { no: 9, name: "record_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => HomeStakePlayRecord_1.HomeStakePlayRecord }
        ]);
    }
    create(value) {
        const message = { recordList: [] };
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
                case /* repeated HomeStakePlayRecord record_list */ 9:
                    message.recordList.push(HomeStakePlayRecord_1.HomeStakePlayRecord.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated HomeStakePlayRecord record_list = 9; */
        for (let i = 0; i < message.recordList.length; i++)
            HomeStakePlayRecord_1.HomeStakePlayRecord.internalBinaryWrite(message.recordList[i], writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeStakeRecord
 */
exports.HomeStakeRecord = new HomeStakeRecord$Type();
