"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FireworksLaunchDataNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const FireworksLaunchSchemeData_1 = require("./FireworksLaunchSchemeData");
// @generated message type with reflection information, may provide speed optimized methods
class FireworksLaunchDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("FireworksLaunchDataNotify", [
            { no: 8, name: "scheme_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => FireworksLaunchSchemeData_1.FireworksLaunchSchemeData },
            { no: 15, name: "last_use_scheme_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { schemeDataList: [], lastUseSchemeId: 0 };
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
                case /* repeated FireworksLaunchSchemeData scheme_data_list */ 8:
                    message.schemeDataList.push(FireworksLaunchSchemeData_1.FireworksLaunchSchemeData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 last_use_scheme_id */ 15:
                    message.lastUseSchemeId = reader.uint32();
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
        /* repeated FireworksLaunchSchemeData scheme_data_list = 8; */
        for (let i = 0; i < message.schemeDataList.length; i++)
            FireworksLaunchSchemeData_1.FireworksLaunchSchemeData.internalBinaryWrite(message.schemeDataList[i], writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 last_use_scheme_id = 15; */
        if (message.lastUseSchemeId !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.lastUseSchemeId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FireworksLaunchDataNotify
 */
exports.FireworksLaunchDataNotify = new FireworksLaunchDataNotify$Type();
