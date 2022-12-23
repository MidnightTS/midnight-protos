"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRedPointNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const RedPointData_1 = require("./RedPointData");
// @generated message type with reflection information, may provide speed optimized methods
class UpdateRedPointNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("UpdateRedPointNotify", [
            { no: 10, name: "red_point_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => RedPointData_1.RedPointData }
        ]);
    }
    create(value) {
        const message = { redPointList: [] };
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
                case /* repeated RedPointData red_point_list */ 10:
                    message.redPointList.push(RedPointData_1.RedPointData.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated RedPointData red_point_list = 10; */
        for (let i = 0; i < message.redPointList.length; i++)
            RedPointData_1.RedPointData.internalBinaryWrite(message.redPointList[i], writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message UpdateRedPointNotify
 */
exports.UpdateRedPointNotify = new UpdateRedPointNotify$Type();
