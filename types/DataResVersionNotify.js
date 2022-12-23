"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataResVersionNotify = exports.DataResVersionNotify_DataResVersionOpType = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ResVersionConfig_1 = require("./ResVersionConfig");
/**
 * @generated from protobuf enum DataResVersionNotify.DataResVersionOpType
 */
var DataResVersionNotify_DataResVersionOpType;
(function (DataResVersionNotify_DataResVersionOpType) {
    /**
     * @generated from protobuf enum value: DATA_RES_VERSION_OP_TYPE_NONE = 0;
     */
    DataResVersionNotify_DataResVersionOpType[DataResVersionNotify_DataResVersionOpType["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: DATA_RES_VERSION_OP_TYPE_RELOGIN = 1;
     */
    DataResVersionNotify_DataResVersionOpType[DataResVersionNotify_DataResVersionOpType["RELOGIN"] = 1] = "RELOGIN";
    /**
     * @generated from protobuf enum value: DATA_RES_VERSION_OP_TYPE_MP_RELOGIN = 2;
     */
    DataResVersionNotify_DataResVersionOpType[DataResVersionNotify_DataResVersionOpType["MP_RELOGIN"] = 2] = "MP_RELOGIN";
})(DataResVersionNotify_DataResVersionOpType = exports.DataResVersionNotify_DataResVersionOpType || (exports.DataResVersionNotify_DataResVersionOpType = {}));
// @generated message type with reflection information, may provide speed optimized methods
class DataResVersionNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("DataResVersionNotify", [
            { no: 13, name: "client_silence_data_version", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "op_type", kind: "enum", T: () => ["DataResVersionNotify.DataResVersionOpType", DataResVersionNotify_DataResVersionOpType, "DATA_RES_VERSION_OP_TYPE_"] },
            { no: 3, name: "client_silence_version_suffix", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 9, name: "client_version_suffix", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 15, name: "is_data_need_relogin", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "client_silence_md5", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "client_data_version", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "client_md5", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "res_version_config", kind: "message", T: () => ResVersionConfig_1.ResVersionConfig }
        ]);
    }
    create(value) {
        const message = { clientSilenceDataVersion: 0, opType: 0, clientSilenceVersionSuffix: "", clientVersionSuffix: "", isDataNeedRelogin: false, clientSilenceMd5: "", clientDataVersion: 0, clientMd5: "" };
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
                case /* uint32 client_silence_data_version */ 13:
                    message.clientSilenceDataVersion = reader.uint32();
                    break;
                case /* DataResVersionNotify.DataResVersionOpType op_type */ 6:
                    message.opType = reader.int32();
                    break;
                case /* string client_silence_version_suffix */ 3:
                    message.clientSilenceVersionSuffix = reader.string();
                    break;
                case /* string client_version_suffix */ 9:
                    message.clientVersionSuffix = reader.string();
                    break;
                case /* bool is_data_need_relogin */ 15:
                    message.isDataNeedRelogin = reader.bool();
                    break;
                case /* string client_silence_md5 */ 12:
                    message.clientSilenceMd5 = reader.string();
                    break;
                case /* uint32 client_data_version */ 5:
                    message.clientDataVersion = reader.uint32();
                    break;
                case /* string client_md5 */ 2:
                    message.clientMd5 = reader.string();
                    break;
                case /* ResVersionConfig res_version_config */ 7:
                    message.resVersionConfig = ResVersionConfig_1.ResVersionConfig.internalBinaryRead(reader, reader.uint32(), options, message.resVersionConfig);
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
        /* uint32 client_silence_data_version = 13; */
        if (message.clientSilenceDataVersion !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.clientSilenceDataVersion);
        /* DataResVersionNotify.DataResVersionOpType op_type = 6; */
        if (message.opType !== 0)
            writer.tag(6, runtime_1.WireType.Varint).int32(message.opType);
        /* string client_silence_version_suffix = 3; */
        if (message.clientSilenceVersionSuffix !== "")
            writer.tag(3, runtime_1.WireType.LengthDelimited).string(message.clientSilenceVersionSuffix);
        /* string client_version_suffix = 9; */
        if (message.clientVersionSuffix !== "")
            writer.tag(9, runtime_1.WireType.LengthDelimited).string(message.clientVersionSuffix);
        /* bool is_data_need_relogin = 15; */
        if (message.isDataNeedRelogin !== false)
            writer.tag(15, runtime_1.WireType.Varint).bool(message.isDataNeedRelogin);
        /* string client_silence_md5 = 12; */
        if (message.clientSilenceMd5 !== "")
            writer.tag(12, runtime_1.WireType.LengthDelimited).string(message.clientSilenceMd5);
        /* uint32 client_data_version = 5; */
        if (message.clientDataVersion !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.clientDataVersion);
        /* string client_md5 = 2; */
        if (message.clientMd5 !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.clientMd5);
        /* ResVersionConfig res_version_config = 7; */
        if (message.resVersionConfig)
            ResVersionConfig_1.ResVersionConfig.internalBinaryWrite(message.resVersionConfig, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DataResVersionNotify
 */
exports.DataResVersionNotify = new DataResVersionNotify$Type();
