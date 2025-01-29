#!/usr/bin/env node

/**
 * Copyright Valkey GLIDE Project Contributors - SPDX Identifier: Apache-2.0
 */

import { GLIBC, MUSL, familySync } from "detect-libc";
import { arch, platform } from "process";

let globalObject = global as unknown;

/* eslint-disable @typescript-eslint/no-require-imports */
function loadNativeBinding() {
    let nativeStr = process.env.native_binding;

    if (nativeStr == undefined) {
        switch (platform) {
            case "linux":
                switch (arch) {
                    case "x64":
                        switch (familySync()) {
                            case MUSL:
                                nativeStr = "linux-musl-x64";
                                break;
                            case GLIBC:
                            default:
                                nativeStr = "linux-x64";
                                break;
                        }

                        break;
                    case "arm64":
                        switch (familySync()) {
                            case MUSL:
                                nativeStr = "linux-musl-arm64";
                                break;
                            case GLIBC:
                            default:
                                nativeStr = "linux-arm64";
                                break;
                        }

                        break;
                    default:
                        throw new Error(
                            `Unsupported OS: ${platform}, architecture: ${arch}`,
                        );
                }

                break;
            case "darwin":
                switch (arch) {
                    case "x64":
                        nativeStr = "darwin-x64";
                        break;
                    case "arm64":
                        nativeStr = "darwin-arm64";
                        break;
                    default:
                        throw new Error(
                            `Unsupported OS: ${platform}, architecture: ${arch}`,
                        );
                }

                break;
            default:
                throw new Error(
                    `Unsupported OS: ${platform}, architecture: ${arch}`,
                );
        }
    }

    let scope = process.env.scope || "@scope";

    if (scope == "@scope") {
        scope = "@valkey/"
    }

    const nativeBinding = require(`${scope}valkey-glide-${nativeStr}`);

    if (!nativeBinding) {
        throw new Error(`Failed to load native binding`);
    }

    return nativeBinding;
}

function initialize() {
    const nativeBinding = loadNativeBinding();
    const {
        AggregationType,
        BaseScanOptions,
        ScanOptions,
        ZScanOptions,
        HScanOptions,
        BitEncoding,
        BitFieldGet,
        BitFieldIncrBy,
        BitFieldOffset,
        BitFieldOverflow,
        BitFieldSet,
        BitFieldSubCommands,
        BitOffset,
        BitOffsetMultiplier,
        BitOffsetOptions,
        BitOverflowControl,
        BitmapIndexType,
        BitwiseOperation,
        ConditionalChange,
        Decoder,
        DecoderOption,
        GeoAddOptions,
        CoordOrigin,
        MemberOrigin,
        SearchOrigin,
        GeoBoxShape,
        GeoCircleShape,
        GeoSearchShape,
        GeoSearchResultOptions,
        GeoSearchStoreResultOptions,
        SortOrder,
        GeoUnit,
        GeospatialData,
        GlideClient,
        GlideClusterClient,
        GlideClientConfiguration,
        GlideJson,
        GlideFt,
        Field,
        TextField,
        TagField,
        NumericField,
        VectorField,
        VectorFieldAttributesFlat,
        VectorFieldAttributesHnsw,
        FtCreateOptions,
        FtSearchOptions,
        FtInfoReturnType,
        FtAggregateOptions,
        FtAggregateLimit,
        FtAggregateFilter,
        FtAggregateGroupBy,
        FtAggregateReducer,
        FtAggregateSortBy,
        FtAggregateSortProperty,
        FtAggregateApply,
        FtAggregateReturnType,
        FtSearchReturnType,
        GlideRecord,
        GlideString,
        JsonGetOptions,
        JsonArrPopOptions,
        SortedSetDataType,
        StreamEntryDataType,
        HashDataType,
        FunctionListOptions,
        FunctionListResponse,
        FunctionStatsSingleResponse,
        FunctionStatsFullResponse,
        FunctionRestorePolicy,
        SlotIdTypes,
        SlotKeyTypes,
        TimeUnit,
        RouteByAddress,
        RouteOption,
        Routes,
        RestoreOptions,
        SingleNodeRoute,
        PeriodicChecksManualInterval,
        PeriodicChecks,
        Logger,
        Limit,
        LolwutOptions,
        LPosOptions,
        ListDirection,
        ExpireOptions,
        FlushMode,
        InfoOptions,
        InsertPosition,
        SetOptions,
        ZAddOptions,
        InfBoundary,
        KeyWeight,
        Boundary,
        ProtocolVersion,
        RangeByIndex,
        RangeByScore,
        RangeByLex,
        ReadFrom,
        ServerCredentials,
        SortOptions,
        StreamGroupOptions,
        StreamTrimOptions,
        StreamAddOptions,
        StreamReadGroupOptions,
        StreamReadOptions,
        StreamClaimOptions,
        StreamPendingOptions,
        ClosingError,
        ConfigurationError,
        ExecAbortError,
        ValkeyError,
        GlideReturnType,
        StreamEntries,
        ReturnTypeXinfoStream,
        RequestError,
        TimeoutError,
        ConnectionError,
        ClusterTransaction,
        Transaction,
        PubSubMsg,
        ScoreFilter,
        SignedEncoding,
        UnsignedEncoding,
        UpdateByScore,
        createLeakedArray,
        createLeakedAttribute,
        createLeakedBigint,
        createLeakedDouble,
        createLeakedMap,
        createLeakedString,
        Script,
        ObjectType,
        ClusterScanCursor,
        AdvancedGlideClientConfiguration,
        AdvancedGlideClusterClientConfiguration,
        BaseClientConfiguration,
        GlideClusterClientConfiguration,
        LevelOptions,
        ReturnTypeRecord,
        ReturnTypeMap,
        ClusterResponse,
        ReturnTypeAttribute,
        ReturnTypeJson,
        UniversalReturnTypeJson,
    } = nativeBinding;

    module.exports = {
        AggregationType,
        BaseScanOptions,
        ScanOptions,
        HScanOptions,
        ZScanOptions,
        BitEncoding,
        BitFieldGet,
        BitFieldIncrBy,
        BitFieldOffset,
        BitFieldOverflow,
        BitFieldSet,
        BitFieldSubCommands,
        BitOffset,
        BitOffsetMultiplier,
        BitOffsetOptions,
        BitOverflowControl,
        BitmapIndexType,
        BitwiseOperation,
        ConditionalChange,
        Decoder,
        DecoderOption,
        GeoAddOptions,
        GlideFt,
        Field,
        TextField,
        TagField,
        NumericField,
        VectorField,
        VectorFieldAttributesFlat,
        VectorFieldAttributesHnsw,
        FtCreateOptions,
        FtSearchOptions,
        FtInfoReturnType,
        FtAggregateOptions,
        FtAggregateLimit,
        FtAggregateFilter,
        FtAggregateGroupBy,
        FtAggregateReducer,
        FtAggregateSortBy,
        FtAggregateSortProperty,
        FtAggregateApply,
        FtAggregateReturnType,
        FtSearchReturnType,
        GlideRecord,
        GlideJson,
        GlideString,
        JsonGetOptions,
        JsonArrPopOptions,
        SortedSetDataType,
        StreamEntryDataType,
        HashDataType,
        CoordOrigin,
        MemberOrigin,
        SearchOrigin,
        GeoBoxShape,
        GeoCircleShape,
        GeoSearchShape,
        GeoSearchResultOptions,
        GeoSearchStoreResultOptions,
        SortOrder,
        GeoUnit,
        GeospatialData,
        GlideClient,
        GlideClusterClient,
        GlideClientConfiguration,
        AdvancedGlideClientConfiguration,
        AdvancedGlideClusterClientConfiguration,
        FunctionListOptions,
        FunctionListResponse,
        FunctionStatsSingleResponse,
        FunctionStatsFullResponse,
        FunctionRestorePolicy,
        SlotIdTypes,
        SlotKeyTypes,
        StreamEntries,
        TimeUnit,
        ReturnTypeXinfoStream,
        RouteByAddress,
        RouteOption,
        Routes,
        RestoreOptions,
        SingleNodeRoute,
        PeriodicChecksManualInterval,
        PeriodicChecks,
        Logger,
        LolwutOptions,
        Limit,
        LPosOptions,
        ListDirection,
        ExpireOptions,
        FlushMode,
        InfoOptions,
        InsertPosition,
        SetOptions,
        ZAddOptions,
        InfBoundary,
        KeyWeight,
        Boundary,
        ProtocolVersion,
        RangeByIndex,
        RangeByScore,
        RangeByLex,
        ReadFrom,
        ServerCredentials,
        SortOptions,
        StreamGroupOptions,
        StreamTrimOptions,
        StreamAddOptions,
        StreamClaimOptions,
        StreamReadGroupOptions,
        StreamReadOptions,
        StreamPendingOptions,
        ClosingError,
        ConfigurationError,
        ExecAbortError,
        ValkeyError,
        GlideReturnType,
        RequestError,
        TimeoutError,
        ConnectionError,
        ClusterTransaction,
        Transaction,
        PubSubMsg,
        ScoreFilter,
        SignedEncoding,
        UnsignedEncoding,
        UpdateByScore,
        createLeakedArray,
        createLeakedAttribute,
        createLeakedBigint,
        createLeakedDouble,
        createLeakedMap,
        createLeakedString,
        Script,
        ObjectType,
        ClusterScanCursor,
        BaseClientConfiguration,
        GlideClusterClientConfiguration,
        LevelOptions,
        ReturnTypeRecord,
        ReturnTypeMap,
        ClusterResponse,
        ReturnTypeAttribute,
        ReturnTypeJson,
        UniversalReturnTypeJson,
    };

    globalObject = Object.assign(global, nativeBinding);
}

initialize();

export default globalObject;
