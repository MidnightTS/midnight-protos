"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IrodoriScanEntityRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const IrodoriPoetryThemeData_1 = require("./IrodoriPoetryThemeData");
// @generated message type with reflection information, may provide speed optimized methods
class IrodoriScanEntityRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("IrodoriScanEntityRsp", [
            { no: 1, name: "theme_data", kind: "message", T: () => IrodoriPoetryThemeData_1.IrodoriPoetryThemeData },
            { no: 12, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 13, name: "is_get_inspiration", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { retcode: 0, isGetInspiration: false };
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
                case /* IrodoriPoetryThemeData theme_data */ 1:
                    message.themeData = IrodoriPoetryThemeData_1.IrodoriPoetryThemeData.internalBinaryRead(reader, reader.uint32(), options, message.themeData);
                    break;
                case /* int32 retcode */ 12:
                    message.retcode = reader.int32();
                    break;
                case /* bool is_get_inspiration */ 13:
                    message.isGetInspiration = reader.bool();
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
        /* IrodoriPoetryThemeData theme_data = 1; */
        if (message.themeData)
            IrodoriPoetryThemeData_1.IrodoriPoetryThemeData.internalBinaryWrite(message.themeData, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* int32 retcode = 12; */
        if (message.retcode !== 0)
            writer.tag(12, runtime_1.WireType.Varint).int32(message.retcode);
        /* bool is_get_inspiration = 13; */
        if (message.isGetInspiration !== false)
            writer.tag(13, runtime_1.WireType.Varint).bool(message.isGetInspiration);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message IrodoriScanEntityRsp
 */
exports.IrodoriScanEntityRsp = new IrodoriScanEntityRsp$Type();
