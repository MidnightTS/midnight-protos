"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetCoolDownNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const WidgetCoolDownData_1 = require("./WidgetCoolDownData");
// @generated message type with reflection information, may provide speed optimized methods
class WidgetCoolDownNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("WidgetCoolDownNotify", [
            { no: 2, name: "normal_cool_down_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => WidgetCoolDownData_1.WidgetCoolDownData },
            { no: 14, name: "group_cool_down_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => WidgetCoolDownData_1.WidgetCoolDownData }
        ]);
    }
    create(value) {
        const message = { normalCoolDownDataList: [], groupCoolDownDataList: [] };
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
                case /* repeated WidgetCoolDownData normal_cool_down_data_list */ 2:
                    message.normalCoolDownDataList.push(WidgetCoolDownData_1.WidgetCoolDownData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated WidgetCoolDownData group_cool_down_data_list */ 14:
                    message.groupCoolDownDataList.push(WidgetCoolDownData_1.WidgetCoolDownData.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated WidgetCoolDownData normal_cool_down_data_list = 2; */
        for (let i = 0; i < message.normalCoolDownDataList.length; i++)
            WidgetCoolDownData_1.WidgetCoolDownData.internalBinaryWrite(message.normalCoolDownDataList[i], writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated WidgetCoolDownData group_cool_down_data_list = 14; */
        for (let i = 0; i < message.groupCoolDownDataList.length; i++)
            WidgetCoolDownData_1.WidgetCoolDownData.internalBinaryWrite(message.groupCoolDownDataList[i], writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WidgetCoolDownNotify
 */
exports.WidgetCoolDownNotify = new WidgetCoolDownNotify$Type();
