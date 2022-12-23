"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkyCrystalDetectorQuickUseResult = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const SkyCrystalDetectorData_1 = require("./SkyCrystalDetectorData");
// @generated message type with reflection information, may provide speed optimized methods
class SkyCrystalDetectorQuickUseResult$Type extends runtime_5.MessageType {
    constructor() {
        super("SkyCrystalDetectorQuickUseResult", [
            { no: 2, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "sky_crystal_detector_data", kind: "message", T: () => SkyCrystalDetectorData_1.SkyCrystalDetectorData }
        ]);
    }
    create(value) {
        const message = { retcode: 0 };
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
                case /* int32 retcode */ 2:
                    message.retcode = reader.int32();
                    break;
                case /* SkyCrystalDetectorData sky_crystal_detector_data */ 4:
                    message.skyCrystalDetectorData = SkyCrystalDetectorData_1.SkyCrystalDetectorData.internalBinaryRead(reader, reader.uint32(), options, message.skyCrystalDetectorData);
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
        /* int32 retcode = 2; */
        if (message.retcode !== 0)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.retcode);
        /* SkyCrystalDetectorData sky_crystal_detector_data = 4; */
        if (message.skyCrystalDetectorData)
            SkyCrystalDetectorData_1.SkyCrystalDetectorData.internalBinaryWrite(message.skyCrystalDetectorData, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SkyCrystalDetectorQuickUseResult
 */
exports.SkyCrystalDetectorQuickUseResult = new SkyCrystalDetectorQuickUseResult$Type();
