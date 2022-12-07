"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickUseWidgetRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const SkyCrystalDetectorQuickUseResult_1 = require("./SkyCrystalDetectorQuickUseResult");
const ClientCollectorData_1 = require("./ClientCollectorData");
const OneoffGatherPointDetectorData_1 = require("./OneoffGatherPointDetectorData");
// @generated message type with reflection information, may provide speed optimized methods
class QuickUseWidgetRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("QuickUseWidgetRsp", [
            { no: 11, name: "material_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "detector_data", kind: "message", oneof: "param", T: () => OneoffGatherPointDetectorData_1.OneoffGatherPointDetectorData },
            { no: 10, name: "client_collector_data", kind: "message", oneof: "param", T: () => ClientCollectorData_1.ClientCollectorData },
            { no: 172322, name: "sky_crystal_detector_quick_use_result", kind: "message", oneof: "param", T: () => SkyCrystalDetectorQuickUseResult_1.SkyCrystalDetectorQuickUseResult }
        ]);
    }
    create(value) {
        const message = { materialId: 0, retcode: 0, param: { oneofKind: undefined } };
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
                case /* uint32 material_id */ 11:
                    message.materialId = reader.uint32();
                    break;
                case /* int32 retcode */ 12:
                    message.retcode = reader.int32();
                    break;
                case /* OneoffGatherPointDetectorData detector_data */ 14:
                    message.param = {
                        oneofKind: "detectorData",
                        detectorData: OneoffGatherPointDetectorData_1.OneoffGatherPointDetectorData.internalBinaryRead(reader, reader.uint32(), options, message.param.detectorData)
                    };
                    break;
                case /* ClientCollectorData client_collector_data */ 10:
                    message.param = {
                        oneofKind: "clientCollectorData",
                        clientCollectorData: ClientCollectorData_1.ClientCollectorData.internalBinaryRead(reader, reader.uint32(), options, message.param.clientCollectorData)
                    };
                    break;
                case /* SkyCrystalDetectorQuickUseResult sky_crystal_detector_quick_use_result */ 172322:
                    message.param = {
                        oneofKind: "skyCrystalDetectorQuickUseResult",
                        skyCrystalDetectorQuickUseResult: SkyCrystalDetectorQuickUseResult_1.SkyCrystalDetectorQuickUseResult.internalBinaryRead(reader, reader.uint32(), options, message.param.skyCrystalDetectorQuickUseResult)
                    };
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
        /* uint32 material_id = 11; */
        if (message.materialId !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.materialId);
        /* int32 retcode = 12; */
        if (message.retcode !== 0)
            writer.tag(12, runtime_1.WireType.Varint).int32(message.retcode);
        /* OneoffGatherPointDetectorData detector_data = 14; */
        if (message.param.oneofKind === "detectorData")
            OneoffGatherPointDetectorData_1.OneoffGatherPointDetectorData.internalBinaryWrite(message.param.detectorData, writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* ClientCollectorData client_collector_data = 10; */
        if (message.param.oneofKind === "clientCollectorData")
            ClientCollectorData_1.ClientCollectorData.internalBinaryWrite(message.param.clientCollectorData, writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* SkyCrystalDetectorQuickUseResult sky_crystal_detector_quick_use_result = 172322; */
        if (message.param.oneofKind === "skyCrystalDetectorQuickUseResult")
            SkyCrystalDetectorQuickUseResult_1.SkyCrystalDetectorQuickUseResult.internalBinaryWrite(message.param.skyCrystalDetectorQuickUseResult, writer.tag(172322, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message QuickUseWidgetRsp
 */
exports.QuickUseWidgetRsp = new QuickUseWidgetRsp$Type();
